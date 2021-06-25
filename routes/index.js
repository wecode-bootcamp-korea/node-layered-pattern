import express from 'express'
const router = express.Router()

import ProductRouter from './ProductRouter'

router.use('/products', ProductRouter);

export default router