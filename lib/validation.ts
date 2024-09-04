import { z, ZodType } from "zod";
import { FormData } from "./types";

export const ContactSchema: ZodType<FormData> = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email(),
  phone: z
    .string()
    .min(1, { message: "Enter your phone number" })
    .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers"),
  message: z.string().min(1, { message: "Enter your message" }),
});
