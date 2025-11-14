import { motion } from "framer-motion";
import { Ship, ShieldCheck, ClipboardCheck } from "lucide-react";

const steps = [
  {
    title: "Sourcing & Grading",
    icon: ClipboardCheck,
    desc: "Partner farms and suppliers undergo strict audits and consistent grading checks.",
  },
  {
    title: "Quality & Packaging",
    icon: ShieldCheck,
    desc: "Moisture control, fumigation, and export‑grade packaging for long‑haul freshness.",
  },
  {
    title: "Logistics & Delivery",
    icon: Ship,
    desc: "End‑to‑end documentation, customs clearance, and on‑time dispatch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Our Process
        </motion.h2>
        <p className="mt-2 text-gray-600">From farm to port with traceability at every step.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <s.icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
