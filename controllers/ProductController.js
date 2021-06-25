import { ProductService } from '../services'


const findDrinks = async (req, res) => {
	try {
		console.log('im in controller')
		const drinks = await ProductService.findDrinks()
		res.status(201).json({
			message: "SUCCESS",
			data: drinks
		})
	} catch (err) {
		console.log(err)
	}
}

export default { findDrinks }