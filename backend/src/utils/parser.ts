// utils/token.ts
export function getJwtTokenFromHeader(authHeader: string): string | null {
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.split(" ")[1];
}
