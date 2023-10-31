import {jwtVerify, SignJWT} from "jose";
import {JWTDecodeParams} from "next-auth/jwt";
import {JWTEncodeParams} from "next-auth/jwt/types";

export const JWT_EXPIRATION_DURATION_30_DAYS = 60 * 60 * 24 * 30;

export const JWT_COOKIE_NAME = 'next-auth.session-token'

export async function decodeJwt(data: JWTDecodeParams) {
  let {payload} = await jwtVerify(data.token!!, new TextEncoder().encode(data.secret as string));
  return payload;
}

export async function encodeJwt(data: JWTEncodeParams) {

  const now = Math.floor(Date.now() / 1000);
  const expiration = now + JWT_EXPIRATION_DURATION_30_DAYS;

  return new SignJWT(data.token!!)
  .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
  .setExpirationTime(expiration)
  .setIssuedAt(now)
  .sign(new TextEncoder().encode(data.secret as string));
}
