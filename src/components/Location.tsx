import Image from 'next/image';

export default function Location() {
  return (
    <section className="my-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-secondary">Prime Location</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="relative h-64">
            <Image src="/api/placeholder/400/300" alt="Map" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h3 className="text-2xl font-semibold text-primary">Gift City</h3>
          <p className="mt-4 text-gray-600">
            &ldquo;Luxury is a location like no other&rdquo;. Skyview lets you take
            advantage of Gift City&apos;s prime location and world-class infrastructure.
            Enjoy easy access to:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center"><span className="text-accent mr-2">•</span> International Financial Services Centre</li>
            <li className="flex items-center"><span className="text-accent mr-2">•</span> World-class Educational Institutions</li>
            <li className="flex items-center"><span className="text-accent mr-2">•</span> Healthcare Facilities</li>
            <li className="flex items-center"><span className="text-accent mr-2">•</span> Shopping and Entertainment Hubs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}