import prisma from '../prisma'

const findDrinks = async () => {
	console.log('Im in Dao')
	const drinks = await prisma.$queryRaw(`
	  SELECT * FROM drinks;
	`)
	return drinks;
}

export default { findDrinks }