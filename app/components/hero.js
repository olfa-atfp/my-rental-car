// components/hero.jsx
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
          <img
            src="/hero-car.png"
            alt="Luxury car"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full"
          >
            <motion.span
              variants={fadeInUp}
              className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4 block"
            >
              Beyond Rental
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl text-white leading-none mb-6 font-serif"
            >
              The Road,
              <br /> Mastered.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light"
            >
              Exclusive access to the world's most compelling vehicles.
              Delivered to your door, perfectly curated for your escape.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group flex items-center justify-center px-8 py-4 text-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors">
                Reserve a Vehicle
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-lg text-white border border-white/30 hover:bg-white/10 transition-colors">
                Explore the Fleet
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Bar */}
      <section className="relative z-30 -mt-20 max-w-5xl mx-auto px-4">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-8 flex flex-col md:flex-row gap-6 shadow-2xl">
          <div className="flex-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
              Pick-up Location
            </label>
            <div className="flex items-center border-b border-white/20 pb-2">
              <MapPin className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="City, Airport, or Hotel"
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/30"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
              Dates
            </label>
            <div className="flex items-center border-b border-white/20 pb-2">
              <Clock className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Select dates"
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/30"
              />
            </div>
          </div>
          <div className="flex items-end">
            <button className="w-full md:w-auto h-12 px-8 bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors">
              Find Vehicles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
