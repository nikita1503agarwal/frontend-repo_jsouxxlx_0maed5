import { motion } from "framer-motion";
import { PackageOpen, Leaf, FlameKindling } from "lucide-react";

const products = [
  {
    name: "Dry Fruits",
    description: "Premium almonds, cashews, pistachios, and raisins sourced from trusted growers.",
    icon: PackageOpen,
    highlights: ["Hand-picked", "AA Grade", "Vacuum sealed"],
    color: "from-amber-400/20 to-amber-600/20",
  },
  {
    name: "Mirchi",
    description: "Sun‑dried red chilies with consistent heat levels and rich color.",
    icon: FlameKindling,
    highlights: ["Stemless options", "Scoville tested", "Bulk packed"],
    color: "from-rose-400/20 to-rose-600/20",
  },
  {
    name: "Corn",
    description: "Non‑GMO yellow corn with strict moisture control and grading.",
    icon: Leaf,
    highlights: ["Grade A", "Moisture < 14%", "Fumigated"],
    color: "from-emerald-400/20 to-emerald-600/20",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Products
        </motion.h2>
        <p className="mt-2 text-gray-600">Certified quality, transparent pricing, and dependable shipping.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className={`h-32 rounded-xl bg-gradient-to-br ${p.color}`} />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p.icon className="h-5 w-5 text-gray-900" />
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
                    {p.highlights.map((h) => (
                      <li key={h} className="rounded-full bg-gray-100 px-2.5 py-1">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
