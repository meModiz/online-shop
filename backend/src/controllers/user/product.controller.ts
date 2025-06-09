import { Request, Response } from "express";
import prisma from "../../prisma";
import { HTTP } from "../../utils/statusCodes";
export async function getProducts(req: Request, res: Response) {
  const page = parseInt(req.params.page, 10);
  const pageAmount = 10;
  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * pageAmount,
      take: pageAmount,
    });
    res.status(HTTP.OK).json({ products: products });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
    return;
  }
}
