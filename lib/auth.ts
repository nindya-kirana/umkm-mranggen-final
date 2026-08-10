import { SignJWT, jwtVerify } from "jose";

function getSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET belum dikonfigurasi.");
  }

  return new TextEncoder().encode(secret);
}

export async function createToken() {
  const secret = getSecret();

  return await new SignJWT({
    role: "admin",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const secret = getSecret();

    const result = await jwtVerify(token, secret);

    return result.payload;
  } catch (error) {
    console.error("JWT VERIFY ERROR:", error);

    return null;
  }
}