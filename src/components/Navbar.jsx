import { useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="grid h-9 w-9 place-content-center rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow"
                >
                  <Globe2 className="h-5 w-5" />
                </motion.span>
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-semibold text-gray-900">Agri Exports</span>
                <span className="block text-xs text-gray-500">Dry Fruits • Mirchi • Corn</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-colors">
                Get Quote
              </a>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-700 shadow"
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden px-4 pb-4"
              >
                <div className="grid gap-2">
                  {links.map((l) => (
                    <a
                      key={l.label}
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100/70"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    onClick={() => setOpen(false)}
                    href="#contact"
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
