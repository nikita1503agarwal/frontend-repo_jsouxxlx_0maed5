import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_80%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(32rem_32rem_at_20%_-10%,rgba(251,146,60,0.18),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Global Import & Export of Premium Agricultural Goods
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-lg text-gray-600"
            >
              We specialize in high‑quality dry fruits, fiery mirchi, and golden corn — delivered with uncompromising standards and transparent logistics.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition-colors">Explore Products</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50 transition-colors">Get a Quote</a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: "Countries Served", value: "35+" },
                { label: "On‑time Delivery", value: "98%" },
                { label: "Avg. Lead Time", value: "14d" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur"
                >
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="mt-1 text-xs text-gray-500">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-emerald-50 via-amber-50 to-rose-50 p-2 shadow-xl"
            >
              <div className="grid h-full w-full grid-cols-3 gap-2">
                {["Dry Fruits","Mirchi","Corn"].map((title, i) => (
                  <motion.div
                    key={title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow hover:shadow-lg"
                  >
                    <div className="h-28 rounded-xl bg-gradient-to-br from-amber-400/40 via-rose-300/40 to-emerald-300/40" />
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{title}</div>
                        <div className="text-xs text-gray-500">Export Grade</div>
                      </div>
                      <motion.span whileHover={{ rotate: 12 }} className="text-xs rounded-full bg-gray-900 px-2 py-1 text-white">View</motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
