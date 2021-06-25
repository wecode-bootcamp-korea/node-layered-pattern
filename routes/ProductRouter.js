import express from 'express';
import { ProductController } from '../controllers'

const router = express.Router();

router.get('', ProductController.findDrinks)

export default router