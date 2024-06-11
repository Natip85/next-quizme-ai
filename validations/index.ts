import { GameType } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
  password: z.string().min(1, {
    message: "Password required",
  }),
  code: z.optional(z.string()),
});
export const RegisterSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const quizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, {
      message: "Topic must be at least 4 characters long",
    })
    .max(50, {
      message: "Topic must be at most 50 characters long",
    }),
  type: z.nativeEnum(GameType),
  amount: z.number().min(1).max(10),
});
