import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
var fs = require('fs');
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { password } = req.body;
    const correctPassword = process.env.PASSWORD;
    const FailedAuthLogPath = path.join(process.cwd(), "log/FailedAuths.txt")


    if (password === correctPassword) {
        res.status(200).end();
    } else {
        const response = await axios.get('https://ipapi.co/json/');
        const { country_name,region,city,ip,postal } = response.data;
        const content = `${fs.readFileSync(FailedAuthLogPath, 'utf8')}\nFailed Auth at ${country_name}, ${region}, ${city}, ${ip}, ${postal}, ${new Date}, Password Tried:"${password}"`;
        fs.writeFile(FailedAuthLogPath, content, 'utf8', (err: any) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File has been written successfully!');
        });
        console.log(FailedAuthLogPath);
        res.status(401).end();
    }
}

