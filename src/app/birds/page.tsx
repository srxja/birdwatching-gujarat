import birdData from '@/data/birds.json';
import BirdCard from '@/components/BirdCard'; // <-- IMPORT OUR NEW COMPONENT

export default function BirdsPage() {
  return (
    <div className="bg-[#F7F5F2] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Meet the Birds of Gujarat</h1>
          <p className="text-lg text-gray-600 mt-2">Click a card to learn more about each species.</p>
        </div>

        {/* 
          This is now much cleaner! We just loop through the data
          and render one BirdCard for each bird, passing the bird's data to it.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {birdData.map((bird) => (
            <BirdCard key={bird.id} bird={bird} />
          ))}
        </div>
        
      </div>
    </div>
  );
}