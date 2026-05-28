import { motion } from "framer-motion";

const loaderVariants = {
  pulse: {
    scale: [0.95, 1.05, 0.95],
    boxShadow: [
      "0 0 0 0 rgba(59, 130, 246, 0.45)",
      "0 0 24px 12px rgba(59, 130, 246, 0.15)",
      "0 0 0 0 rgba(59, 130, 246, 0.45)",
    ],
    transition: {
      duration: 1.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04111d] bg-opacity-95 text-slate-100">
      <div className="relative flex flex-col items-center gap-8 px-6 py-8 text-center">
        <motion.div
          className="flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_60px_rgba(56,189,248,0.25)]"
          variants={loaderVariants}
          animate="pulse"
        >
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#38bdf8] to-[#7dd3fc] shadow-[0_0_40px_rgba(56,189,248,0.45)]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold tracking-[0.24em] text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.35)]">
              NSS
            </div>
          </motion.div>
        </motion.div>

        <div className="max-w-xs space-y-3">
          <motion.h2
            className="text-xl font-semibold uppercase tracking-[0.24em] text-cyan-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Loading smart community
          </motion.h2>
          <motion.p
            className="text-sm leading-6 text-slate-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Preparing your NSS dashboard experience with a premium glow effect.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
