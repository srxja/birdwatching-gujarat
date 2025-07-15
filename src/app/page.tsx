import Image from 'next/image';

export default function HomePage() {
  return (
    // The main container for the entire page. It's 'relative' so we can position
    // the background image and overlay inside it.
    <main className="relative">
      
      {/* 
        BACKGROUND IMAGE & OVERLAY
        These two elements cover the entire main container, staying fixed in the background.
        The -z-10 class places them behind all other content.
      */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <Image
        // A new, beautiful, and reliable image of Kingfishers!
        src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg"
        alt="Two vibrant kingfisher birds perched on a branch"
        fill
        objectFit="cover"
        quality={90}
        priority
        className="-z-10" 
      />

      {/* 
        SECTION 1: The Initial View ("Hero" section)
      */}
      <section className="h-screen flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg animate-fade-in-down">
            Gujarat: Where the Sky Comes Alive
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md animate-fade-in-up">
            Discover hundreds of species in one of India's most vibrant ecosystems.
          </p>
        </div>
      </section>

      {/* 
        SECTION 2: The Scrollable Content
      */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Adventure Awaits
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Imagine a land where the dawn chorus is a symphony of a thousand birds. Picture vast wetlands painted pink with flamingos and grasslands echoing with the calls of rare bustards. This isn't a dream—it's Gujarat. This website is your field guide and your companion on a quest to uncover the winged wonders of this incredible state.
            </p>
          </div>
          
          <div className="bg-slate-800 bg-opacity-70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              What is Bird Watching?
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Birding is more than just a hobby; it's a thrilling pursuit of discovery. It's the challenge of identifying a fleeting silhouette against the sky, the joy of hearing a rare song, and the deep connection you feel to the natural world. Armed with simple gear and a spark of curiosity, you are about to step into a world of breathtaking beauty and endless fascination.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}