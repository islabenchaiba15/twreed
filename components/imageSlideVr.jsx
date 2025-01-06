'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/slide1.jpg',
  '/slide2.png',
  '/slide1.jpg',
  '/slide1.jpg',
  '/slide1.jpg',
];

export default function VRImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto max-h-[300px]">
      {/* Main image container */}
      <div className="relative aspect-[1/1] w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        
        {/* VR badges */}
        <div className="absolute top-1 left-1 bg-black/75 text-white px-1 py-1 rounded-md font-semibold text-xs">
          VR
        </div>
    
        
        {/* Pagination */}
        <div className="absolute bottom-1 right-16 bg-black/55 text-white px-2 py-1 rounded-md text-xs">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-1 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-1 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  )
}