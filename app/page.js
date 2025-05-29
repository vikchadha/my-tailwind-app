import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚀 Tailwind CSS Works!
          </h1>
          <p className="text-gray-600 mb-6">
            Your Next.js + Tailwind stack is ready for AI code generation!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}