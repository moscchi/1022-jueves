import mongoose, { Document, Schema } from "mongoose";

export enum Categories {
  ALMACEN = "ALMACEN",
  ELECTRIC = "ELECTRONICA",
  INFORMATIC = "INFORMATICA",
  HOME = "HOGAR",
}
//
export interface IProduct extends Document {
  name: string;
  price: number;
  category: Categories;
}

const ProductSchema = new Schema({
  name: String,
  price: Number,
  category: {
    type: String,
    enum: Categories/* == ["ALMACEN", "ELECTRONICA", "INFORMATICA", "HOGAR"] */,
  },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
