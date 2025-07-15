import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Gujarat Birds
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link href="/birds" className="text-gray-600 hover:text-blue-500">Birds</Link>
            <Link href="/birdwatching-guide" className="text-gray-600 hover:text-blue-500">Birdwatching Guide</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}