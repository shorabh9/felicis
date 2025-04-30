import { useState } from 'react';
import { ArrowRight, ChevronDown, Plus } from 'lucide-react';

export default function FelicisHomepage() {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isFocusAreasMenuOpen, setIsFocusAreasMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="  font-sans">
      {/* Navigation */}
      <nav className="px-4 py-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-orange-500 w-[120px] mr-2">
             <img src='/logo1.png'/>
            </div>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
              >
                About <Plus className="ml-1 w-4 h-4" />
              </button>
              {isAboutMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-40">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Story</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Philosophy</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Process</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Benchmark</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Team</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Companies</a>
            <div className="relative">
              <button 
                className="flex items-center text-purple-500 hover:text-purple-700"
                onClick={() => setIsFocusAreasMenuOpen(!isFocusAreasMenuOpen)}
              >
                Focus Areas <Plus className="ml-1 w-4 h-4" />
              </button>
              {isFocusAreasMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-40">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">AI & Machine Learning</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Enterprise</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Consumer</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Health</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Insights</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4 py-2">
              <div>
                <button 
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900"
                  onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                >
                  <span>About</span>
                  <Plus className="ml-1 w-4 h-4" />
                </button>
                {isAboutMenuOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-gray-900">Our Story</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900">Philosophy</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900">Process</a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900">Benchmark</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Team</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Companies</a>
              <div>
                <button 
                  className="flex items-center justify-between w-full text-purple-500 hover:text-purple-700"
                  onClick={() => setIsFocusAreasMenuOpen(!isFocusAreasMenuOpen)}
                >
                  <span>Focus Areas</span>
                  <Plus className="ml-1 w-4 h-4" />
                </button>
                {isFocusAreasMenuOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-gray-900">AI & Machine Learning</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900">Enterprise</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900">Consumer</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900">Health</a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900">Insights</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="px-4 xl:py-12 py-3  md:px-8 lg:px-16 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Heading */}
          <div className="w-full flex  justify-center md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl   md:text-5xl lg:text-6xl font-semibold  text-gray-800 leading-tight">
              Luck isn't made,
              <br />
              <span className="bg-gradient-to-r  from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                it's engineered
              </span>
            </h1>
          </div>

          {/* Right side - Content */}
          <div className="w-full flex justify-center md:w-1/2  md:pl-8">
            <div className="max-w-lg p-2 ">
              <p className="text-2xl md:text-2xl font-medium text-gray-700 mb-8">
                We back founders building iconic companies that transcend boundaries. We invest directly in their growth to make them unbreakable.
              </p>
              <div className="flex justify-center items-center">
                <button className=" flex items-center text-gray-700 font-medium hover:text-gray-900">
                  READ MORE
                  <span className="ml-4 p-3 border border-gray-300 rounded-full">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}