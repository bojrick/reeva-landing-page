import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Gallery() {
  return (
    <section className="my-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-secondary">Experience Skyview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Living Room', 'Kitchen', 'Balcony View'].map((room, index) => (
          <div key={index} className="relative h-64 group overflow-hidden rounded-lg">
            <Image 
              src={`/api/placeholder/400/300?text=${room}`} 
              alt={room} 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold">{room}</h3>
              <p className="text-sm">Experience luxury in every corner</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <Button variant="link" className="text-primary hover:text-primary/80">View all images →</Button>
      </div>
    </section>
  );
}