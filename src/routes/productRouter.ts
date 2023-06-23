import express from 'express'
import { addProduct } from '../controllers/product/addProduct';
import { getAllProducts } from '../controllers/product/getAllProducts';
import { updateProduct } from '../controllers/product/updateProduct';
import { deleteProduct } from '../controllers/product/deleteProduct';

const router = express.Router();

router.get('/', getAllProducts)
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;