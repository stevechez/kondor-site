import { createClient } from '@supabase/supabase-js';

export default function ContactForm() {
  async function createLead(formData: FormData) {
    'use server';

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for server-side writes
    );

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      project_type: formData.get('project_type'),
      message: formData.get('message'),
    };

    const { error } = await supabase.from('leads').insert([data]);

    if (error) throw new Error('Failed to send message');
    // You could redirect to a /thank-you page here
  }

  return (
    <form action={createLead} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
          <input name="name" type="text" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
          <input name="email" type="email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Project Type</label>
        <select name="project_type" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
          <option>Kitchen Remodel</option>
          <option>Bathroom Remodel</option>
          <option>Custom Build / Addition</option>
          <option>Roofing / Exterior</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
        <textarea name="message" rows={4} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Tell us about your project..."></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md">
        Send Request
      </button>
    </form>
  );
}