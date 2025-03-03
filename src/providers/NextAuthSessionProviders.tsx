"use client";
import { SessionProvider } from "next-auth/react";

const NextAuthSessionProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProviders;
