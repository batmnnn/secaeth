import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">SecÆth</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#crisis" className="text-gray-800 hover:text-blue-600">Crisis</Link>
            <Link href="#solution" className="text-gray-800 hover:text-blue-600">Solution</Link>
            <Link href="#how-it-works" className="text-gray-800 hover:text-blue-600">How It Works</Link>
            <Link href="#security" className="text-gray-800 hover:text-blue-600">Security</Link>
            <Link href="#implementation" className="text-gray-800 hover:text-blue-600">Implementation</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

