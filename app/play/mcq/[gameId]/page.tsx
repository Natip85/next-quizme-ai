import MCQ from "@/components/MCQ";
import db from "@/db/db";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    gameId: string;
  };
};

export default async function MCQPage({ params: { gameId } }: Props) {
  const user = await currentUser();
  if (!user) {
    return redirect("/");
  }
  const game = await db.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: { select: { id: true, question: true, options: true } },
    },
  });
  if (!game || game.gameType !== "mcq") {
    return redirect("/quiz");
  }
  return <MCQ game={game} />;
}
