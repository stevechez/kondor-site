import { Phone } from "lucide-react";

export default function FloatingCallButton({ phoneNumber }: { phoneNumber: string }) {
  if (!phoneNumber) return null;

  // Clean the phone number for the tel: link
  const numericPhone = phoneNumber.replace(/\D/g, "");

  return (
    <a
      href={`tel:${numericPhone}`}
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-transform active:scale-95 animate-bounce-subtle"
      aria-label="Call Contractor"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}