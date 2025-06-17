import { Request, Response } from "express";
import prisma from "../../prisma";
import { HTTP } from "../../utils/statusCodes";
export async function getProducts(req: Request, res: Response) {
  let page = 1;
  if (req.query.page) {
    page = parseInt(req.query.page.toString(), 10);
  }
  const pageAmount = 9;
  const category = req.query.category?.toString() || undefined;
  try {
    const totalProductCount = await prisma.product.count({
      where: { category: category },
    });

    const totalProductPages = Math.ceil(totalProductCount / pageAmount);

    const products = await prisma.product.findMany({
      where: { category: category },
      skip: (page - 1) * pageAmount,
      take: pageAmount,
    });
    res.status(HTTP.OK).json({ products: products, totalProductPages: totalProductPages });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
    return;
  }
}
