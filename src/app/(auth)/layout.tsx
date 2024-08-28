import Navbar from '@/components/home/navbar';
import { AppProvider } from '@/lib/providers';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="authBody">
      <div className="container" id="container">
        <AppProvider>{children}</AppProvider>
      </div>
    </div>
  );
}
