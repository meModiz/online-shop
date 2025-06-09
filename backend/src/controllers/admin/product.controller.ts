import { Request, Response } from "express";
import { Product_T } from "../../typings/types";
import { productCreateValidation } from "../../validators/admin/product.validation";
import { HTTP } from "../../utils/statusCodes";
import prisma from "../../prisma";
export async function createProduct(req: Request, res: Response) {
  const { name, description, price }: Product_T = req.body;

  const validated = await productCreateValidation({ name, description, price });
  if (!validated.valid) {
    res.status(validated.error?.code ?? HTTP.BAD_REQUEST).json({
      message: validated.error?.message ?? "Failed validation.",
    });
    return;
  }

  try {
    await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
      },
    });
    res.status(HTTP.CREATED).json({ message: "Product succesfully created." });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database error." });
  }
}

export async function editProduct(req: Request, res: Response) {}
