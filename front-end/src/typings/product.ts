import { ApiResponse_T } from "./global";

export type Product_T = {
  id: number;
  name: string;
  price: number;
};

export type ProductResponse_T = {
  response: Product_T[] | ApiResponse_T;
};
