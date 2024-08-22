import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Gallery() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 text-secondary">Experience Skyview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-64">
          <Image src="/api/placeholder/400/300" alt="Luxurious Living Room" layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute bottom-0 left-0 bg-secondary/80 text-white p-2 rounded-br-lg">Living Room</div>
        </div>
        <div className="relative h-64">
          <Image src="/api/placeholder/400/300" alt="Modern Kitchen" layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute bottom-0 left-0 bg-secondary/80 text-white p-2 rounded-br-lg">Kitchen</div>
        </div>
        <div className="relative h-64">
          <Image src="/api/placeholder/400/300" alt="Scenic Balcony View" layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute bottom-0 left-0 bg-secondary/80 text-white p-2 rounded-br-lg">Balcony View</div>
        </div>
      </div>
      <div className="text-right mt-6">
        <Button variant="link" className="text-primary hover:text-primary/80">View all images →</Button>
      </div>
    </section>
  );
}