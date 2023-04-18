import { PrismaClient } from '@prisma/client'
import { NextApiResponse,NextApiRequest } from 'next'

const prisma = new PrismaClient()

type Data = {
    text:String
}

export default async function getServices(){

    const allUsers = await prisma.services.findMany()
  
    console.log(allUsers)
    return allUsers;
  
}