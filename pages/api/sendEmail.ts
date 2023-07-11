import type { NextApiRequest, NextApiResponse } from 'next'
const xoauth2 = require('xoauth2');
let nodemailer = require('nodemailer')

export const config = {
  api: {
    bodyParser: true,
  }
};


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  let transport = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASSWORD,
    },
  });

  const mailData = {
    from: process.env.EMAIL,
    to: 'johnsonhamelh@gmail.com',
    subject: `Mail provenant de ${req.body.EnteredName} ${req.body.EnteredLastName}: ${req.body.EnteredEmail}`,
    text: req.body.EnteredMessage,
  }

  transport.sendMail(mailData, function (err: any, info: any) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200);
}

export default handler;