import { ProductDao } from '../models'


const findDrinks = async () => {
	
	console.log('Im in service')
  return await ProductDao.findDrinks() 
}

export default { findDrinks }