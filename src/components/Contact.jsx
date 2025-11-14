import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Get a Quote
        </motion.h2>
        <p className="mt-2 text-gray-600">Tell us your requirements and destination. We'll reply within 24 hours.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input required placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" />
              <input type="email" required placeholder="Work email" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Product (Dry Fruits / Mirchi / Corn)" className="col-span-2 md:col-span-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" />
                <input required placeholder="Quantity (MT)" className="col-span-2 md:col-span-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" />
              </div>
              <textarea rows={4} placeholder="Destination port and notes" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-gray-500">We never share your information.</p>
              <button className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700">
                Request Quote
              </button>
            </div>
            {sent && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-sm text-emerald-700">
                Thanks! We'll get back to you shortly.
              </motion.p>
            )}
          </form>

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 via-amber-50 to-rose-50 p-6 shadow-sm">
            <div className="grid gap-3 text-sm text-gray-700">
              <p><span className="font-semibold">Head Office:</span> Hyderabad, India</p>
              <p><span className="font-semibold">Email:</span> trade@agriexports.com</p>
              <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold">Working Hours:</span> Mon–Sat, 9am–7pm IST</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["APEDA", "FSSAI", "ISO 22000"].map((k) => (
                <div key={k} className="rounded-xl border border-gray-200 bg-white px-3 py-4 text-center text-xs font-semibold text-gray-700 shadow-sm">
                  {k}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
