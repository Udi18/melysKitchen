import bcrypt from "bcrypt";

export async function hashPassword(plainTextPassword: string) {
  let hashed = "";
  await bcrypt.hash(plainTextPassword, 10, function (err, hash) {
    hashed = hash;
  });
  return hashed;
}

export async function comparePassword(
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}
