import Link from "next/link";
import { Button } from "./ui/button";
import SignInButton from "./auth/SignInButton";
import { currentUser } from "@/lib/auth";
import UserAccountButton from "./auth/UserAccountButton";
import { ModeToggle } from "./theme-toggle";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-primary py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black py-1 px-2 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            quizMe
          </p>
        </Link>
        <div className="flex items-center">
          <ModeToggle className="mr-4" />

          {user ? (
            <UserAccountButton />
          ) : (
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}
