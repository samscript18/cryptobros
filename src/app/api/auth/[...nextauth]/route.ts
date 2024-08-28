import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import { login } from '../login';
import { NextAuthOptions } from 'next-auth';

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', value: 'email' },
        password: { label: 'Password', value: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials || !credentials.email || !credentials.password) {
            return null;
          }

          const { email, password } = credentials;

          const user = await login({ email, password });

          return {
            id: user._id,
            ...user,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthOptions);
