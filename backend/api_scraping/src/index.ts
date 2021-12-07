import { webscraping } from "./webscraping";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const result = async () => await webscraping()

const list = result()

console.log(list);
