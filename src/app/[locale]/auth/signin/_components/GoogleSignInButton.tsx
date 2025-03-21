"use client";
import { FC, ReactNode } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const onSubmit = async () => {
    await signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });
  };
  return (
    <Button
      onClick={onSubmit}
      className="flex bg-white w-full gap-3 items-center"
    >
      <Image
        src={"https://authjs.dev/img/providers/google.svg"}
        width={20}
        height={20}
        alt=""
      />
      <span className="text-black font-semibold uppercase">{children}</span>
    </Button>
  );
};

export default GoogleSignInButton;
