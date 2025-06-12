import Link from 'next/link';

export default function TestIndex() {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <h1 className="text-4xl font-bold mb-8">Test Page Index</h1>
      <div className="flex flex-col gap-4">
        <Link href="/test/1" className="text-blue-500 hover:underline">
          Test ID: 1
        </Link>
        <Link href="/test/2" className="text-blue-500 hover:underline">
          Test ID: 2
        </Link>
        <Link href="/test/3" className="text-blue-500 hover:underline">
          Test ID: 3
        </Link>
        <Link href="/test/custom-id" className="text-blue-500 hover:underline">
          Test ID: custom-id
        </Link>
      </div>
    </div>
  );
} 