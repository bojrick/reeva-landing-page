import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Amenities() {
  const amenities = ['Mini Theater', 'Library', 'Medicare Center', 'Toddlers Zone'];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <ul className="space-y-2">
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <Button className="mt-4">View All Amenities</Button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image src="/api/placeholder/400/300" alt="Gym" width={400} height={300} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}