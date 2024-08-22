'use client';

import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full">
      <Image
        src="/api/placeholder/1200/800"
        alt="Skyview Property"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 text-white max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 animate-fade-in-up">Skyview</h1>
        <p className="mb-2 text-lg sm:text-xl animate-fade-in-up animation-delay-200">Luxury Living in the Heart of Gift City</p>
        <p className="mb-6 animate-fade-in-up animation-delay-400">2 & 3 BHK | Premium Residences | Under Construction</p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
          <Button className="bg-accent hover:bg-accent/90 text-white flex-grow sm:flex-grow-0">Inquire Now</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20 flex-grow sm:flex-grow-0">Brochure</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20 flex-grow sm:flex-grow-0">View On Map</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20 flex-grow sm:flex-grow-0">Gallery</Button>
        </div>
      </div>
    </div>
  );
}