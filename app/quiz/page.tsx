import QuizCreation from "@/components/QuizCreation";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadat = {
  title: "Quiz | qiuzMe",
  description: "Quiz yourself on anything!",
};
interface QuizProps {
  searchParams: {
    topic?: string;
  };
}
export default async function Quiz({ searchParams }: QuizProps) {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  return <QuizCreation topic={searchParams.topic ?? ""} />;
}
