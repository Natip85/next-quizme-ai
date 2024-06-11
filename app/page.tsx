import SignInButton from "@/components/auth/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to quizMe 🔥</CardTitle>
          <CardDescription>
            quizMe is a platform for creating quizzes using AI!. Get started by
            logging in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </CardContent>
      </Card>
    </div>
  );
}
