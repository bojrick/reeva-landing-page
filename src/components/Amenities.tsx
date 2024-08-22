import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Amenities() {
  const amenities = [
    'State-of-the-art Fitness Center',
    'Rooftop Infinity Pool',
    'Private Cinema',
    'Landscaped Gardens',
    "Children's Play Area",
    '24/7 Security'
  ];

  return (
    <section className="my-12 bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-secondary">World-Class Amenities</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <ul className="space-y-2">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <span className="text-accent mr-2">✓</span> {amenity}
              </li>
            ))}
          </ul>
          <Button className="mt-6 bg-primary hover:bg-primary/90">View All Amenities</Button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <div className="relative h-64">
            <Image src="/api/placeholder/400/300" alt="Luxury Amenities" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}