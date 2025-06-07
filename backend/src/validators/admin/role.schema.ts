import { z } from "zod/v4";
import { Role } from "../../typings/enums";

export const roleSchema = z.nativeEnum(Role);
