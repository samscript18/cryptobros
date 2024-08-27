import mongoose from 'mongoose';

const dbUrl = process.env.DATABASE_URL;

export async function connectDb() {
  await mongoose
    .connect(dbUrl)
    .then(() => {})
    .catch((e) => console.error(e));
}
