import prisma from "../../prisma";
import { HTTP } from "../../utils/statusCodes";
import { Request, Response } from "express";
import UserInfoInputValidation from "../../validators/admin/user.validation";
import RoleValidation from "../../validators/admin/role.validation";
import { changeUserRole } from "../../services/admin.services";

export default async function SetRole(req: Request, res: Response) {
  const { email, role } = req.body;

  const userValidation = await UserInfoInputValidation(email);
  if (!userValidation.valid) {
    res.status(userValidation.error?.code ?? HTTP.BAD_REQUEST).json({
      message: userValidation.error?.errorMessage ?? "Failed validation.",
    });
    return;
  }

  const roleValidation = await RoleValidation(role);
  if (!roleValidation.valid) {
    res.status(roleValidation.error?.code ?? HTTP.BAD_REQUEST).json({
      message: roleValidation.error?.errorMessage ?? "Failed validation.",
    });
    return;
  }

  try {
    const roleChange = await changeUserRole(email, role);
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
