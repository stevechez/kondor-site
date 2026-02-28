import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials({ reviews }: { reviews: any[] }) {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review._id} className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="flex flex-row gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </CardHeader>
              <CardContent>
                <p className="italic text-slate-300 mb-4">"{review.quote}"</p>
                <p className="font-bold">{review.author}</p>
                <p className="text-xs text-slate-500">{review.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}