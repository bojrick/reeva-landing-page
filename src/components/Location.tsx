import Image from 'next/image';

export default function Location() {
  return (
    <section className="my-12 bg-white p-6 sm:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-secondary">Prime Location</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image 
              src="/api/placeholder/800/600?text=Map" 
              alt="Map" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Gift City</h3>
          <p className="text-gray-600 mb-4">
            &ldquo;Luxury is a location like no other&rdquo;. Skyview lets you take
            advantage of Gift City&apos;s prime location and world-class infrastructure.
          </p>
          <ul className="space-y-2">
            {[
              'International Financial Services Centre',
              'World-class Educational Institutions',
              'Healthcare Facilities',
              'Shopping and Entertainment Hubs'
            ].map((item, index) => (
              <li key={index} className="flex items-center p-2 bg-gray-100 rounded-lg">
                <span className="text-accent mr-3 text-xl">•</span> 
                <span className="text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}