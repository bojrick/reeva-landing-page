'use client';

import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        src="/api/placeholder/1200/800"
        alt="Skyview Property"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Skyview</h1>
        <p className="mb-4">2 & 3 BHK | Gift City | Sold Out | Under Construction</p>
        <div className="flex space-x-4">
          <Button variant="default">Inquire Now</Button>
          <Button variant="outline">Brochure</Button>
          <Button variant="outline">View On Map</Button>
          <Button variant="outline">Gallery</Button>
        </div>
      </div>
    </div>
  );
}