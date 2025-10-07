import { z } from "zod";

export const leadFormSchema = z.object({
  name: z
    .string({ required_error: "Please share your name." })
    .min(2, "Name should be at least 2 characters.")
    .max(80, "Name should be under 80 characters."),
  email: z
    .string({ required_error: "Email is required." })
    .email("Please provide a valid email address."),
  country: z.string().min(2, "Select your country."),
  availability: z.string().min(2, "Select your availability."),
  goals: z
    .string()
    .min(10, "Tell us a little more about your goals.")
    .max(600, "Keep goals under 600 characters.")
    .optional()
    .or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
