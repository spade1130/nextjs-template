import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm py-4 px-8 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="/test" className="hover:text-blue-500 transition-colors">
            Test
          </Link>
        </nav>
      </div>
    </header>
  );
} 