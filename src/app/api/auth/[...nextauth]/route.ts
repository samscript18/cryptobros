import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from '../login';
import { NextAuthOptions } from 'next-auth';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', value: 'email' },
        password: { label: 'Password', value: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const { email, password } = credentials;

        const user = await login({ email, password });

        return {
          id: user._id,
          ...user,
        };
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthOptions);

export { handler as GET, handler as POST };
