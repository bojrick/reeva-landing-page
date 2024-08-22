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
    <section className="my-12 bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-secondary">World-Class Amenities</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <ul className="space-y-4">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center p-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
                <span className="text-accent mr-3 text-xl">✓</span> 
                <span className="text-secondary">{amenity}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-6 bg-primary hover:bg-primary/90 w-full sm:w-auto">View All Amenities</Button>
        </div>
        <div className="lg:w-1/2">
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image 
              src="/api/placeholder/800/600" 
              alt="Luxury Amenities" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}