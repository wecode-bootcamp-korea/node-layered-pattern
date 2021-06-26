const csv = require('csv-parser')
const fs = require('fs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient() 

const categories = []

const createCategory = () => {
  fs.createReadStream('dataUploader/data.csv')
    .pipe(csv())
    .on('data', async (category) => {
      try {
        categories.push(category.name)
        await prisma.$queryRaw(`
          INSERT INTO categories (name) VALUES ('${category.name}')
        `)
      } catch {
        console.log('error')
      }
    })
    .on('end', async () => {
      await console.log('CATEGORY: ', categories)
      prisma.$disconnect()
    })
}

createCategory()