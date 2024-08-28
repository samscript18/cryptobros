import { comparePassword } from '@/lib/utils';
import { connectDb } from '@/lib/utils/db';
import { userModel } from '@/models/userModel';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await connectDb();

  try {
    const user = await userModel.findOne({ email });

    if (!user) throw new Error('User does not exist');

    const passwordMatch = await comparePassword(password, user.password!);

    if (!passwordMatch) throw new Error('Incorrect password');

    delete user['password'];

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
