import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FeaturedDrivers from "../components/drivers/FeaturedDrivers";
import ConstructorStandings from "../components/teams/ConstructorStandings";
import UpcomingRace from "../components/races/UpcomingRace";
import AnalyticsPreview from "../components/analytics/AnalyticsPreview";
import CircuitIntelligence from "../components/circuits/CircuitIntelligence";
import RaceCalendarTimeline from "../components/races/RaceCalendarTimeline";
import TelemetryDashboard from "../components/analytics/TelemetryDashboard";
import Footer from "../components/common/Footer";
import heroVideo from "../assets/videos/hero.mp4";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">

      {/* NAVBAR */}

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#202020]">

  <div className="max-w-[1600px] mx-auto px-12 py-8 flex justify-between items-center">

    <Link
      to="/"
      className="uppercase tracking-[8px] text-xl font-light"
    >
      F1CC
    </Link>

    <div className="flex gap-12">

      <Link
        to="/drivers"
        className="uppercase tracking-[4px] hover:text-[#FFC000] transition-colors duration-300"
      >
        Drivers
      </Link>

      <Link
        to="/teams"
        className="uppercase tracking-[4px] hover:text-[#FFC000] transition-colors duration-300"
      >
        Teams
      </Link>

      <Link
        to="/races"
        className="uppercase tracking-[4px] hover:text-[#FFC000] transition-colors duration-300"
      >
        Races
      </Link>

      <Link
        to="/circuits"
        className="uppercase tracking-[4px] hover:text-[#FFC000] transition-colors duration-300"
      >
        Circuits
      </Link>

      <Link
        to="/analytics"
        className="uppercase tracking-[4px] hover:text-[#FFC000] transition-colors duration-300"
      >
        Analytics
      </Link>

    </div>

  </div>

</nav>

      {/* HERO */}

<section
  className="
  relative
  min-h-screen
  flex
  items-center
  justify-center
  overflow-hidden
  "
>

  {/* VIDEO */}

  <video
    autoPlay
    muted
    loop
    playsInline
    className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    "
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* OVERLAYS */}

  <div className="absolute inset-0 bg-black/70" />

  <div
    className="
    absolute
    inset-0
    bg-gradient-to-b
    from-black/60
    via-transparent
    to-black
    "
  />

  {/* CONTENT */}

  <div
    className="
    relative
    z-20
    text-center
    max-w-6xl
    mx-auto
    px-8
    "
  >

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
      uppercase
      tracking-[12px]
      text-[#FFC000]
      mb-10
      "
    >
      Formula One Intelligence Platform
    </motion.p>

    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
      uppercase
      font-light
      leading-none
      text-[90px]
      lg:text-[180px]
      "
    >
      F1
      <br />
      Command
      <br />
      Center
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="
      text-[#D0D0D0]
      text-xl
      max-w-3xl
      mx-auto
      mt-10
      "
    >
      Professional Formula One analytics,
      telemetry intelligence, race strategy,
      constructor performance and circuit
      intelligence platform.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="
      flex
      justify-center
      gap-6
      mt-12
      "
    >

      <Link
        to="/analytics"
        className="
        bg-[#FFC000]
        text-black
        px-10
        py-4
        uppercase
        tracking-[4px]
        hover:opacity-90
        transition-all
        "
      >
        Explore Analytics
      </Link>

      <Link
        to="/races"
        className="
        border
        border-white
        px-10
        py-4
        uppercase
        tracking-[4px]
        hover:bg-white
        hover:text-black
        transition-all
        "
      >
        Race Center
      </Link>

    </motion.div>

  </div>

</section>

      {/* MAIN SECTIONS */}

      <FeaturedDrivers />

      <ConstructorStandings />

      <UpcomingRace />

      <AnalyticsPreview />

      <CircuitIntelligence />

      <RaceCalendarTimeline />

      <TelemetryDashboard />

      {/* FOOTER */}

      <Footer />

    </div>
  );
}