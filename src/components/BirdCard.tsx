'use client'; // This is crucial! It tells Next.js this is an interactive component.

import { useState } from 'react';
import Image from 'next/image';

// Define the shape of the 'bird' data we expect to receive
type Bird = {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  info: string;
};

// The component receives a 'bird' object as a prop
export default function BirdCard({ bird }: { bird: Bird }) {
  // 'useState' creates a state variable to track if the card is flipped or not.
  // It starts as 'false'.
  const [isFlipped, setIsFlipped] = useState(false);

  // This function is called when the card is clicked. It simply inverts the state.
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // The main container. 'perspective' creates the 3D space for the flip.
    <div
      className="w-full h-96 perspective"
      onClick={handleFlip}
    >
      {/* 
        This is the inner container that actually flips.
        We apply the rotation class conditionally based on the 'isFlipped' state.
      */}
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* CARD FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden">
          {/* The Image Container */}
          <div className="relative w-full h-72">
            <Image
              src={bird.image}
              alt={`A photo of a ${bird.name}`}
              fill
              objectFit="cover"
            />
          </div>
          {/* The Text Content */}
          <div className="p-4 bg-white h-24">
            <h2 className="text-xl font-bold text-gray-800">{bird.name}</h2>
            <p className="text-md italic text-gray-500">{bird.scientificName}</p>
          </div>
        </div>

        {/* CARD BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{bird.name}</h2>
          <div className="border-t border-gray-200 mb-4"></div>
          <p className="text-gray-600 text-base leading-relaxed overflow-y-auto">
            {bird.info}
          </p>
        </div>
      </div>
    </div>
  );
}