export default function Footer() {
    const footerSections = [
      {
        title: "What We Do",
        items: ["Luxury Residential Projects", "Premium Commercial Spaces", "Property Management Services"]
      },
      {
        title: "Why Choose Us",
        items: ["Uncompromising Quality", "Innovative Designs", "Customer-Centric Approach"]
      },
      {
        title: "Connect With Us",
        items: []
      }
    ];
  
    return (
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                {section.items.length > 0 ? (
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="hover:text-accent transition-colors duration-300">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex space-x-4 mt-2">
                    {['FB', 'TW', 'IN'].map((social, socialIndex) => (
                      <span key={socialIndex} className="bg-white text-secondary p-2 rounded-full hover:bg-accent hover:text-white transition-colors duration-300 cursor-pointer">
                        {social}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center border-t border-white/20 pt-6">
            <p>&copy; 2024 Skyview Property. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }