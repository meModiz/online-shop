import prisma from "../../prisma";
import { Request, Response } from "express";
import { HTTP } from "../../utils/statusCodes";
import roleValidation from "../../validators/admin/role.validation";
import { changeUserRole } from "../../services/admin.services";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.status(HTTP.OK).json({ users: users });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
    return;
  }
}

export async function updateUserRole(req: Request, res: Response) {
  const { role } = req.body;
  const userId = parseInt(req.params.id, 10);

  const validated = await roleValidation(role);
  if (!validated.valid) {
    res.status(validated.error?.code ?? HTTP.BAD_REQUEST).json({
      message: validated.error?.errorMessage ?? "Failed validation.",
    });
    return;
  }

  try {
    const roleChange = await changeUserRole(userId, role);
    if (roleChange.changed === false) {
      res
        .status(roleChange.error?.code ?? HTTP.INTERNAL_SERVER_ERROR)
        .json({ message: roleChange.error?.message ?? "Database error." });
      return;
    }
    res.status(HTTP.OK).json({ message: "Succesfully changed role." });
  } catch (err) {
    res.status(HTTP.INTERNAL_SERVER_ERROR).json({ message: "Database is not responding." });
  }
}
