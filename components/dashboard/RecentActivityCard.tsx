import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import db from "@/db/db";
import HistoryComponent from "../HistoryComponent";

type Props = {};

export default async function RecentActivityCard({}: Props) {
  const user = await currentUser();
  if (!user || !user.id) {
    return redirect("/");
  }
  const games_count = await db.game.count({
    where: {
      userId: user.id,
    },
  });
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          You have attempted a total of {games_count} quizzes.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        <HistoryComponent limit={10} userId={user.id} />
      </CardContent>
    </Card>
  );
}
