export default function PropertyDetails() {
    return (
      <section className="my-12 p-6 sm:p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-secondary">&ldquo;Experience the pinnacle of sky-high living&rdquo;</h2>
        <p className="text-gray-600 mb-6">
          Skyview offers an unparalleled living experience in the heart of Gift City. 
          With breathtaking views and world-class amenities, it&apos;s designed for those 
          who appreciate the finer things in life. Our 2 & 3 BHK residences combine luxury, 
          comfort, and sophisticated design to create your perfect home in the sky.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
            <p className="text-2xl font-bold text-primary">828 - 1200 Sq. Ft</p>
            <p className="text-sm text-gray-500">RERA Carpet Area</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
            <p className="text-2xl font-bold text-primary">₹ 1.15 Cr - 1.8 Cr*</p>
            <p className="text-sm text-gray-500">Price Range</p>
          </div>
        </div>
      </section>
    );
  }