import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, details } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme Construction <onboarding@resend.dev>', // Update to your domain later
      to: ['your-contractor-email@gmail.com'], // The contractor's inbox
      subject: `New Lead: ${name} - Project Inquiry`,
      html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Project Details:</strong></p>
        <p>${details}</p>
        <hr />
        <p><em>Sent from your 2026 High-Conversion Website.</em></p>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}