import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Agri Exports. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <span className="text-gray-300">•</span>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <span className="text-gray-300">•</span>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
