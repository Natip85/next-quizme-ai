"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type WordCloudProps = {
  formattedTopics: { text: string; value: number }[];
};

const data = [
  { text: "Hey", value: 3 },
  { text: "Bye", value: 9 },
  { text: "Good", value: 5 },
  { text: "Dogs and Cats", value: 7 },
];
const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

export default function WordCloud({ formattedTopics }: WordCloudProps) {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={(word) => word.value % 360}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </>
  );
}
