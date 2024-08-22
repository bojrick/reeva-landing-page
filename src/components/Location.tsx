import Image from 'next/image';

export default function Location() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Location</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src="/api/placeholder/400/300" alt="Map" width={400} height={300} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
          <h3 className="text-xl font-semibold">Gift City</h3>
          <p className="mt-2">
            &ldquo;Luxury is a location like no other&rdquo;. Skyview lets you take
            advantage of Gift City&apos;s prime location and world-class infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}