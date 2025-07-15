export default function GuidePage() {
    return (
      // We use the same 'sketchbook' background for a consistent website theme.
      <div className="bg-[#F7F5F2] min-h-screen">
        <div className="container mx-auto px-4 py-12 md:py-16">
  
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Birding Adventure Starts Here</h1>
            <p className="text-lg text-gray-600 mt-2">A practical guide to making the most of your time in nature.</p>
          </div>
  
          {/* A container for our "journey" sections */}
          <div className="max-w-4xl mx-auto space-y-8">
  
            {/* --- SECTION 1: GEAR UP --- */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex items-start space-x-6">
              {/* The Icon */}
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
              {/* The Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">1. Gear Up: Your Birding Toolkit</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Binoculars:</strong> Your most important tool. 8x42 or 10x42 are great starting points.</li>
                  <li><strong>Field Guide:</strong> A book or app to help you identify the birds of Gujarat.</li>
                  <li><strong>Notebook & Pen:</strong> To jot down observations, sketch birds, and note locations.</li>
                  <li><strong>Camera:</strong> Optional, but great for documenting your sightings.</li>
                  <li><strong>Appropriate Attire:</strong> Wear neutral colors and comfortable walking shoes.</li>
                </ul>
              </div>
            </div>
  
            {/* --- SECTION 2: THE ART OF SPOTTING --- */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex items-start space-x-6">
              {/* The Icon */}
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-4.43a1.012 1.012 0 011.43 0l4.43 4.43a1.012 1.012 0 010 .639l-4.43 4.43a1.012 1.012 0 01-1.43 0l-4.43-4.43z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.036 12.322a1.012 1.012 0 010-.639l4.43-4.43a1.012 1.012 0 011.43 0l4.43 4.43a1.012 1.012 0 010 .639l-4.43 4.43a1.012 1.012 0 01-1.43 0l-4.43-4.43z" />
                </svg>
              </div>
              {/* The Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">2. The Art of Spotting</h2>
                <p className="text-gray-700 mb-4">Birding is a skill that develops over time. Here’s how to improve:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Use Your Ears First:</strong> Often, you will hear a bird long before you see it. Stop and listen.</li>
                  <li><strong>Look for Movement:</strong> Scan the branches and bushes for flickers of motion.</li>
                  <li><strong>Learn Habitats:</strong> Different birds live in different places. Kingfishers are near water, Larks are in open fields.</li>
                  <li><strong>Patience is Key:</strong> Find a comfortable spot, stay quiet, and let the birds come to you.</li>
                </ul>
              </div>
            </div>
  
            {/* --- SECTION 3: THE BIRDER'S CODE --- */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-start space-x-6 mb-4">
                {/* The Icon */}
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                {/* The Title */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">3. The Birder's Code</h2>
                  <p className="text-lg text-gray-600">Respect nature and other observers to ensure birding is enjoyable for everyone.</p>
                </div>
              </div>
  
              {/* Do's and Don'ts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {/* DO's */}
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Do...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Keep a respectful distance from birds and nests.</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Move slowly and quietly to avoid startling wildlife.</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Stay on trails to minimize your impact on the habitat.</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Share your sightings, it helps with conservation!</li>
                  </ul>
                </div>
                {/* DON'Ts */}
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">Don't...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-red-500 mr-2">✗</span> Use excessive sound (like playback) to attract birds.</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2">✗</span> Trespass on private property.</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2">✗</span> Feed birds, as it can make them dependent and unhealthy.</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2">✗</span> Share locations of rare or nesting birds publicly.</li>
                  </ul>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }