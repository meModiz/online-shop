export type ApiError_T = {
  code: number;
  message: string;
};

import { Request } from "express";

export interface UserRequest extends Request {
  user?: JwtPayload;
}
