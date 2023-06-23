import { Request, Response } from "express";
import Product, { IProduct } from "../../models/Product";
import { APIDolar, AddProductDTO } from "./interfaces";
import axios from "axios";


export const addProduct = async (req: Request, res: Response) => {
    try {
        const newProduct: AddProductDTO = req.body;
        const { data } = await axios.get<APIDolar>('https://criptoya.com/api/dolar');
        newProduct.price = (data.blue * newProduct.price)
        const product: IProduct = new Product({
            ...newProduct
        });
        await product.save();
        res.status(201).json({ message: 'Producto creado con exito!'})
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el producto.'})
    }
}