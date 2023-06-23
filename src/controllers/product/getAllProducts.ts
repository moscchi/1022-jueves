import { Request, Response } from "express"
import Product from "../../models/Product"

export const getAllProducts = async (_req: Request, res: Response) => {
    const products = await Product.find();
    res.json(products)
}