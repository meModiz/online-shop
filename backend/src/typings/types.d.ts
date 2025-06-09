export type ApiError_T = {
  code: number;
  message: string;
};

import { Request } from "express";
import { Image } from "../generated/prisma";

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
  name: string;
  description: string;
  price: number;
};

export interface Product_Images_T extends Product_T {
  productImages: Image_T[];
}
