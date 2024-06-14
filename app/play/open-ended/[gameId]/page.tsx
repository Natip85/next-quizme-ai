import OpenEnded from "@/components/OpenEnded";
import db from "@/db/db";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    gameId: string;
  };
};

export default async function OpenEndedPage({ params: { gameId } }: Props) {
  const user = await currentUser();
  if (!user) {
    return redirect("/");
  }
  const game = await db.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: { select: { id: true, question: true, answer: true } },
    },
  });
  if (!game || game.gameType !== "open_ended") {
    return redirect("/quiz");
  }
  return <OpenEnded game={game} />;
}
