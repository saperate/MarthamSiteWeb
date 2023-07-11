import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from "fs";
import path from "path";
import getRealisations from '../../lib/getRealisations'
import formidable, { File } from 'formidable';
import { Prisma, PrismaClient } from '@prisma/client'
import axios from 'axios';

export const config = {
    api: {
        bodyParser: false,
    }
};

const prisma = new PrismaClient();
type ProcessedFiles = Array<[string, File]>;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const responseLocation = await axios.get('https://ipapi.co/json/');
  if(responseLocation.data.country_name != "Canada"){res.end("Unauthorised request, denied");};
  const response = await getRealisations();
  var tags:string[] = [];
  var urls = [];
  let status = 200,
        resultBody = { status: 'ok', message: 'Files were uploaded successfully' };


    /* Get files using formidable */
    const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
        const form = new formidable.IncomingForm();
        
        const files: ProcessedFiles = [];
        form.on('field', function (name,value){
          
          if(name == "password"){
            if(value != process.env.PASSWORD)
            {
              res.end("Unauthorised request, denied");
            }
          }
          else{
            tags = value.split(",");
          }
        })
        form.on('file', function (field, file) {
            files.push([field, file]);
        })
        form.on('end', () => resolve(files));
        form.on('error', err => reject(err));
        form.parse(req, () => {
            //
        });
    }).catch(e => {
        console.log(e);
        status = 500;
        resultBody = {
            status: 'fail', message: 'Upload error'
        }
    });

    if(tags.length < 1 || files?.length == undefined){
      res.end("All Field were not properly filled")
      return;
    }

    if (files?.length) {
      var currIndex = 0;
      
        /* Create directory for uploads */
        const targetPath = path.join(process.cwd(), `/uploads/`);
        try {
            await fs.access(targetPath);
        } catch (e) {
            await fs.mkdir(targetPath);
        }

        console.log(response.length);

        /* Move uploaded files to directory */
        for (const file of files) {
            const tempPath = file[1].filepath;
            var fileType = "."+ file[1].mimetype?.split("/")[1];
            urls[currIndex] =  `http://localhost:3000/api/images?imageName=${response.length+1}_${currIndex}${fileType}`;
            console.log(urls[currIndex]);
           fs.rename(tempPath,`${targetPath}${response.length+1}_${currIndex}${fileType}`);
           currIndex ++;
        }

        //Add all the data to the database (urls, tags, date, id, leave outside as default as we wont use it)
        

        prisma.realisations.create({
          data:{
            ImageUrls:urls,
            Date:new Date(),
            Id:response.length,
            Outside:true,
            Tags:tags
          }
        }).catch(async (e) =>{
          console.log(e);
        })

        
    }

    res.status(status).json(resultBody);
}

export default handler;