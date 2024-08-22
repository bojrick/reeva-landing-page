export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What We Do</h3>
              <ul className="space-y-1">
                <li>Residential Projects</li>
                <li>Commercial Spaces</li>
                <li>Property Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Why We Are</h3>
              <ul className="space-y-1">
                <li>Our Story</li>
                <li>Our Values</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <div className="flex space-x-4 mt-2">
                {/* Add social media icons here */}
                <span>FB</span>
                <span>TW</span>
                <span>IN</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Skyview Property. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }