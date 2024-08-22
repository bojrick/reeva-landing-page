'use client';

import { Button } from "@/components/ui/button";

export default function HomeContent() {
  return (
    <div className="container mx-auto px-4">
      <section className="hero">
        <h1 className="text-4xl font-bold">Skyview</h1>
        <p>2 & 3 BHK | Gift City | Sold Out | Under Construction</p>
        <div className="action-buttons">
          <Button>Inquire Now</Button>
          <Button variant="outline">Brochure</Button>
          <Button variant="outline">View On Map</Button>
          <Button variant="outline">Gallery</Button>
        </div>
      </section>
      
      {/* Add other sections here */}
    </div>
  );
}