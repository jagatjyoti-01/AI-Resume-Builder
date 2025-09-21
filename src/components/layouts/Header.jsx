export default function Header() {
  return (
    <header className="w-full bg-white shadow-2xl shadow-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">AI Resume Builder</h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#how" className="hover:text-blue-600">How it Works</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#builder"
          className="ml-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
