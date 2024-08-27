import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  const saltFactor = await bcrypt.genSalt(12);

  return await bcrypt.hash(password, saltFactor);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
