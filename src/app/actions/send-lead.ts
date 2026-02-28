"use server"

import { Resend } from 'resend';
import { LeadEmail } from '@/components/emails/lead-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadAction(formData: { name: string; phone: string; message: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Construction Leads <onboarding@resend.dev>', // Update to custom domain later
      to: ['your-contractor-email@gmail.com'], // The contractor's email
      subject: `New Lead: ${formData.name}`,
      react: LeadEmail({ 
        name: formData.name, 
        phone: formData.phone, 
        message: formData.message 
      }),
    });

    if (error) return { success: false, error };
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}