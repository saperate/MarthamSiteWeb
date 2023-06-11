import { PrismaClient } from '@prisma/client'
import { NextApiResponse,NextApiRequest } from 'next'

const prisma = new PrismaClient()

type Data = {
    text:String
}

export default async function getServices(){

    let data = await prisma.realisations.findMany({
        //skip:3,
        take:6,
    })

    return data;
  
}