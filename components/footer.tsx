export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">SecÆth</h2>
            <p className="mt-2">Revolutionizing Authentication Through Satellite Technology</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 SecÆth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

