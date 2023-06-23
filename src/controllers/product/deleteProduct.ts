import { Request, Response } from "express";
import Product from "../../models/Product";

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.deleteOne({_id: id});
    if(deleteProduct.deletedCount === 0) {
        return res.status(404).json({ message: "Producto no encontrado." });

    }
    res.json({ message: "El producto fue eliminado con exito." });
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un error" });
  }
};
