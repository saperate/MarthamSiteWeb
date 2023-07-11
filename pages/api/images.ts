import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {imageName} = req.query;
  var cwd = process.cwd() + "/uploads/" + imageName;
  try {
    fs.readFile(cwd, (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 404;
        res.end('Image not found');
      }
      else {
        res.end(data);
      }
    })
  }
  catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end('Server error');
  }
}
