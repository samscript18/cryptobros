import Navbar from "@/components/home/navbar";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="authBody">
      <div className="container" id="container">
        {children}
      </div>
    </div>
  );
}
