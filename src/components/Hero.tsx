'use client';

import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src="/api/placeholder/1200/800"
        alt="Skyview Property"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-5xl font-bold mb-2">Skyview</h1>
        <p className="mb-4 text-lg">Luxury Living in the Heart of Gift City</p>
        <p className="mb-6">2 & 3 BHK | Premium Residences | Under Construction</p>
        <div className="flex space-x-4">
          <Button className="bg-accent hover:bg-accent/90 text-white">Inquire Now</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">Brochure</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">View On Map</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">Gallery</Button>
        </div>
      </div>
    </div>
  );
}