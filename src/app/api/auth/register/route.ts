import { hashPassword } from '@/lib/utils';
import { connectDb } from '@/lib/utils/db';
import { userModel } from '@/models/userModel';

export async function POST(request: Request) {
  try {
    await connectDb();
    const { email, password, name } = await request.json();

    const prevUser = await userModel.findOne({
      email,
    });

    if (prevUser) {
      return Response.json(
        {
          error: 'Oops! a user with this email address already exists',
        },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const data = await userModel.create({
      email,
      password: hashedPassword,
      name,
    });

    return Response.json({ message: 'sign up successful', data });
  } catch (error: any) {
    return Response.json({ error: error?.message ?? error }, { status: 500 });
  }
}
