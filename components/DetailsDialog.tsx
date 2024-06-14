"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const DetailsDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
          What is this
          <HelpCircle className="w-5 h-5 ml-1" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to quizMe!</DialogTitle>
          <DialogDescription>
            <span className="flex items-center gap-3 my-2">
              <span className="flex items-center">
                <Github className="w-5 h-5" />
                <Link
                  target="_blank"
                  className="ml-1 underline"
                  href="https://github.com/Natip85/next-quizme-ai"
                >
                  GitHub
                </Link>
              </span>
            </span>
            <span className="my-2 mt-4 ">
              Are you tired of mundane and repetitive quizzes? Say goodbye to
              the ordinary and embrace the extraordinary with quizMe! This
              platform is revolutionizing the quiz and trivia experience by
              harnessing the immense potential of artificial intelligence.
            </span>
            {/* <hr /> */}
            <span className="my-2 font-semibold">
              <span className="text-base font-semibold">Built with</span>
              <span className="grid justify-around grid-cols-4 mt-2 gap-y-3">
                <span className="flex items-center gap-2">
                  <Image alt="neon" src="/neon.png" width={35} height={35} />
                  <span className="">Neon</span>
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt="nextjs"
                    src="/nextjs.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Next.js</span>
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt="tailwind"
                    src="/tailwind.png"
                    width={35}
                    height={35}
                  />
                  <span className="">Tailwind</span>
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt="nextauth"
                    src="/nextauth.png"
                    width={30}
                    height={30}
                  />
                  <span className="">NextAuth</span>
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt="openai"
                    src="/openai.png"
                    width={30}
                    height={30}
                  />
                  <span className="">OpenAI</span>
                </span>

                <span className="flex items-center gap-2">
                  <Image
                    alt="react query"
                    src="/react-query.png"
                    width={30}
                    height={30}
                  />
                  <span className="">React Query</span>
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt="primsa"
                    src="/prisma.png"
                    width={30}
                    height={30}
                  />
                  <span className="">Prisma</span>
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt="typescript"
                    src="/typescript.png"
                    width={30}
                    height={30}
                  />
                  <span className="">TypeScript</span>
                </span>
              </span>
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
