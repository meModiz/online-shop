export type ApiError_T = {
  code: number;
  message: string;
};

import { Request } from "express";
import { Image } from "@prisma/client";

export interface UserRequest extends Request {
  user?: JwtPayload;
}

export type Image_T = {
  filename: string;
  url: string;
  isMain: boolean;
  productId: int;
};

export type Product_T = {
  id?: number;
  name: string;
  category: string;
  price: number;
  description: string;
  stock: number;
};

export interface Product_Images_T extends Product_T {
  productImages: Image_T[];
}
