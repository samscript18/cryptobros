import { isAxiosError } from 'axios';
import bcrypt from 'bcryptjs';
import toast from 'react-hot-toast';

export async function hashPassword(password: string) {
  const saltFactor = await bcrypt.genSalt(12);

  return await bcrypt.hash(password, saltFactor);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

export async function errorHandler(error: any) {
  let errorMessage = error?.message ?? 'Oops! an error occured';

  if (isAxiosError(error)) {
    errorMessage =
      error.response?.data.error ?? error?.message ?? String(error);
  }

  toast.error(errorMessage, { duration: 1500 });
  throw error;
}
