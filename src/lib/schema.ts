import * as z from "zod";

export const leadFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address"),
  projectType: z.enum([
    "Kitchen Remodel", 
    "Bathroom Remodel", 
    "ADU Build", 
    "Full Home Remodel", 
    "Other"
  ]),
  message: z.string().min(10, "Please provide a few details about your project"),
});
