import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import db from "@/db/db";
import WordCloud from "../WordCloud";

type Props = {};

export default async function HotTopicsCard({}: Props) {
  const topics = await db.topic_count.findMany({});
  const formattedTopics = topics.map((topic) => {
    return {
      text: topic.topic,
      value: topic.count,
    };
  });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
}
