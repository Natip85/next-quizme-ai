"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

interface SignInButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export default function SignInButton({
  children,
  mode = "redirect",
  asChild,
}: SignInButtonProps) {
  const router = useRouter();
  const onClick = () => {
    signIn("google").catch(console.error);

    // router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
