import { ApiResponse_T } from "./global";

export type Product_T = {
  id: number;
  name: string;
  price: number;
};

export type ProductSucess_T = {
  products: Product_T[];
  totalProductPages: number;
  sucess?: true;
};

export type ProductError_T = {
  code: number;
  message: string;
  sucess?: false;
};

export type Response_T = {
  response: ProductSucess_T | ProductError_T;
};
