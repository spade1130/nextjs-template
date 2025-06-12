import Link from 'next/link';

export default async function TestPage({ params }) {
  // Wait for params to be available
  const { id } = await params;
  
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <h1 className="text-4xl font-bold mb-6">ID: {id}</h1>
      <Link href="/test" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Back to Test Page
      </Link>
    </div>
  );
} 