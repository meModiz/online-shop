import prisma from "../prisma";
import { Role } from "../typings/enums";
import { HTTP } from "../utils/statusCodes";

export async function changeUserRole(
  id: number,
  role: Role
): Promise<{ changed: boolean; error?: { code: number; message: string } }> {
  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      role: role,
    },
  });
  if (!updateUser) {
    return { changed: false, error: { code: HTTP.NOT_FOUND, message: "Wrong credentials. (user do not exist)" } };
  }
  return { changed: true };
}
