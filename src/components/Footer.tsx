export default function Footer() {
    return (
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">What We Do</h3>
              <ul className="space-y-2">
                <li>Luxury Residential Projects</li>
                <li>Premium Commercial Spaces</li>
                <li>Property Management Services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-2">
                <li>Uncompromising Quality</li>
                <li>Innovative Designs</li>
                <li>Customer-Centric Approach</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mt-2">
                {/* Add social media icons here */}
                <span className="bg-white text-secondary p-2 rounded-full">FB</span>
                <span className="bg-white text-secondary p-2 rounded-full">TW</span>
                <span className="bg-white text-secondary p-2 rounded-full">IN</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center border-t border-white/20 pt-6">
            <p>&copy; 2024 Skyview Property. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }