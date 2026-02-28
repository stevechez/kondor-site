"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { sendGAEvent } from '@next/third-parties/google';

// 1. Define the Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  details: z.string().min(10, "Please provide a bit more detail about your project"),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
  // 2. Hook up the Resolver
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        sendGAEvent("event", "project_inquiry_sent");
        toast.success("Project inquiry sent!");
        reset();
      }
    } catch (error) {
      toast.error("Failed to send. Please call us directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input {...register("name")} placeholder="Full Name" className="w-full p-3 border rounded-md" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <input {...register("phone")} placeholder="Phone (e.g. 8315551212)" className="w-full p-3 border rounded-md" />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <textarea {...register("details")} placeholder="Project Details" className="w-full p-3 border rounded-md h-32" />
        {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details.message}</p>}
      </div>
      
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all">
        Send Inquiry
      </button>
    </form>
  );
}