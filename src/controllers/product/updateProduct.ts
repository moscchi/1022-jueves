import { Request, Response } from "express";
import { APIDolar, AddProductDTO } from "./interfaces";
import Product, { IProduct } from "../../models/Product";
import axios from "axios";

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isDolar } = req.query;
    const product: AddProductDTO = req.body;
    const productDB: IProduct | null = await Product.findById(id);

    if (!productDB) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    productDB.name = product.name;
    if (isDolar === "true") {
      productDB.price = product.price;
    } else {
      const { data } = await axios.get<APIDolar>(
        "https://criptoya.com/api/dolar"
      );
      productDB.price = data.blue * product.price;
    }
    productDB.category = product.category;

    await productDB.save();
    res.json({ message: "El producto fue actualizado con exito." });
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un error" });
  }
};
