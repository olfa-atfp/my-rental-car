import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex flex-col font-sans overflow-hidden">
      {/* Hero — fills remaining height, no white space */}
      <section
        className="relative flex flex-1 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1c2e 0%, #1a3a5c 60%, #1e4976 100%)",
        }}
      >
        {/* Decorative SVG curves */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 1200 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <ellipse
            cx="950"
            cy="350"
            rx="500"
            ry="420"
            stroke="white"
            strokeWidth="1.5"
          />
          <ellipse
            cx="950"
            cy="350"
            rx="380"
            ry="310"
            stroke="white"
            strokeWidth="1"
          />
          <ellipse
            cx="950"
            cy="350"
            rx="260"
            ry="200"
            stroke="white"
            strokeWidth="0.8"
          />
          <path
            d="M0 500 Q400 200 800 400 T1400 300"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M0 600 Q400 350 900 500 T1400 400"
            stroke="white"
            strokeWidth="0.6"
          />
        </svg>

        {/* Left — Text */}
        <div className="relative z-10 w-1/2 flex flex-col justify-center px-16">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-4">
            Premium Car Rental
          </p>
          <h1 className="text-5xl font-bold text-white leading-tight mb-5">
            Drive in Style,
            <br /> Arrive in Comfort
          </h1>
          <p className="text-blue-200/80 text-base leading-relaxed mb-8 max-w-sm">
            Discover our wide range of vehicles for every occasion. Easy
            booking, transparent pricing, and top-tier service.
          </p>

          {/* Booking bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <Link href="/cars">
              {" "}
              <button className="bg-blue-500 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-blue-400 transition-colors whitespace-nowrap">
                Find a Car
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-2xl font-bold text-white">200+</p>
              <p className="text-xs text-blue-300 mt-1">Vehicles Available</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-blue-300 mt-1">Cities Covered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10k+</p>
              <p className="text-xs text-blue-300 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right — Car image fills full right half, zero gap */}
        <div className="absolute right-0 top-0 w-1/2 h-full z-10 flex items-center justify-center">
          <img
            src="/mercedes_PNG80146.png"
            alt="Car rental vehicle"
            className="w-[80%] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}
