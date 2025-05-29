import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16 min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🚀 Tailwind CSS Works!
            </h1>
            <p className="text-gray-600 mb-6">
              Your Next.js + Tailwind stack is ready for AI code generation!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}