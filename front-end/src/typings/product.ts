export type Product_T = {
  id: number;
  name: string;
  price: number;
};

export type Error_T = {
  code: number;
  message: string;
};

export type Response_T = {
  response: Product_T[] | Error_T;
};
