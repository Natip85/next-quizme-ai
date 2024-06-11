import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { FileWarning } from "lucide-react";
import Link from "next/link";

const ErrorCard = () => {
  return (
    // <CardWrapper
    //   headerLabel="Oops! Something went wrong"
    //   backButtonLabel="Back to login"
    //   backButtonHref="/auth/login"
    // >
    //   <div className="w-full items-center flex justify-center">
    //     <ExclamationTriangleIcon className="text-destructive" />
    //   </div>
    // </CardWrapper>
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <CardTitle>Oops! Something went wrong</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full items-center flex justify-center">
          <FileWarning className="text-destructive" />
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild>
          <Link href={"/auth/login"}>Back to login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
