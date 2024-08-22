'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <Image
        src="/api/placeholder/1200/800?text=Skyview"
        alt="Skyview Property"
        layout="fill"
        objectFit="cover"
        className="brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#174996]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-white">Skyview</h1>
        <div className="flex flex-wrap items-center text-white mb-6 text-sm sm:text-base">
          <span className="mr-4">2 & 3 BHK</span>
          <span className="mr-4">|</span>
          <span className="mr-4">Gift City | Sold Out</span>
          <span className="mr-4">|</span>
          <span>Under Construction</span>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {['Inquire Now', 'Brochure', 'View On Map', 'Gallery'].map((label, index) => (
            <Button 
              key={index}
              variant="secondary" 
              className="bg-[#3D8FCD]/60 hover:bg-[#3D8FCD]/80 text-white border-none rounded-full px-4 py-2 text-xs sm:text-sm"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#174996]/80 text-white text-xs p-2 text-center">
        RERA : PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/RAA11515/240323
      </div>
    </div>
  );
}