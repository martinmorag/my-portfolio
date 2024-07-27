import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="w-[90vw] h-full mx-auto mb-[18vh] min-h-[78vh]
    flex flex-col items-center justify-center md:w-[65vw] md:min-h-[90vh] md:mx-auto md:mt-2 md:mb-4">
      <FaceFrownIcon className="w-[20vw] md:w-[10vw] text-gray-400" />
      <h2 className="text-xl font-semibold pt-1 pb-3 md:pb-0">404 Not Found</h2>
      <Link
        href="/"
        className="mt-0 md:mt-4 rounded-md bg-primary px-4 py-2 text-md text-white transition-colors hover:bg-primary-back hover:text-[black]"
      >Go Back</Link>
    </main>
  );
}