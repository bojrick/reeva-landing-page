import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Gallery() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Image src="/api/placeholder/400/300" alt="Property view 1" width={400} height={300} className="rounded-lg" />
        <Image src="/api/placeholder/400/300" alt="Property view 2" width={400} height={300} className="rounded-lg" />
        <Image src="/api/placeholder/400/300" alt="Property view 3" width={400} height={300} className="rounded-lg" />
      </div>
      <div className="text-right mt-4">
        <Button variant="link">View all images →</Button>
      </div>
    </section>
  );
}