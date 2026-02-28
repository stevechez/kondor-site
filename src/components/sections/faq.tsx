import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you handle permits and inspections?</AccordionTrigger>
            <AccordionContent>
              Yes. We manage all city permits, planning, and code compliance so you don’t have to deal with the red tape.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do you price projects?</AccordionTrigger>
            <AccordionContent>
              We provide fixed, transparent pricing based on a detailed scope of work. No hidden fees or surprises.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}