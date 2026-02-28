"use client"

import { toast } from "sonner" // Direct import, no hook needed
import { sendLeadAction } from "@/app/actions/send-lead"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type FormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  message: z.string().min(5, "Tell us about your project"),
});

export default function LeadForm() {
  // Pass the Zod infer type here
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });
 

  async function onSubmit(values: z.infer<typeof formSchema>) {
async function onSubmit(values: z.infer<typeof formSchema>) {
  // Start a loading toast to give the user immediate feedback
  const promise = sendLeadAction(values);

  toast.promise(promise, {
    loading: 'Sending your inquiry...',
    success: (result) => {
      if (!result.success) throw new Error(); // Trigger error state if action fails
      form.reset();
      return 'Message sent! The contractor will follow up shortly.';
    },
    error: 'Failed to send message. Please try calling directly.',
  });
}    alert("Inquiry Sent!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
  control={form.control}
  name="name" // This must match a key in your schema
  render={({ field }: { field: any }) => ( // Quick fix: cast to any if inference fails
    <FormItem>
      <FormLabel>Full Name</FormLabel>
      <FormControl>
        <Input placeholder="John Smith" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
        )} />
        <FormField
  control={form.control}
  name="phone" // This must match a key in your schema
  render={({ field }: { field: any }) => ( // Quick fix: cast to any if inference fails
    <FormItem>
      <FormLabel>Phone</FormLabel>
      <FormControl>
        <Input placeholder="555-555-1212" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
        )} />
        <FormField
  control={form.control}
  name="message" // This must match a key in your schema
  render={({ field }: { field: any }) => ( // Quick fix: cast to any if inference fails
    <FormItem>
      <FormLabel>Project Details</FormLabel>
      <FormControl>
        <Input placeholder="John Smith" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
        )} />
        <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">Request Quote</Button>
      </form>
    </Form>
  );
}