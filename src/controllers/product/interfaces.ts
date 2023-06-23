import { Categories } from "../../models/Product";

export interface AddProductDTO {
  name: string;
  price: number;
  category: Categories;
}

export interface APIDolar {
  oficial: number;
  solidario: number;
  blue: number;
  ccb: number;
  mep: number;
  ccl: number;
  mepgd30: number;
  cclgd30: number;
  blue_bid: number;
  qatar: number;
  mep_var: number;
  ccl_var: number;
  ccb_var: number;
  blue_var: number;
  time: number;
}
