import { motion } from "framer-motion";

export default function CircuitIntelligence() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">

      <div className="max-w-[1600px] mx-auto px-16">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20">

          <div>
            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Circuit Database
            </p>

            <h2
              className="
              uppercase
              text-[72px]
              lg:text-[96px]
              leading-none
              font-light
              "
            >
              Circuit
              <br />
              Intelligence
            </h2>
          </div>

          <p
            className="
            text-[#7D7D7D]
            max-w-lg
            mt-8
            lg:mt-0
            text-right
            "
          >
            Advanced track analytics, race history and
            performance insights from Formula One's
            most iconic circuits.
          </p>

        </div>

        {/* MAIN CIRCUIT CARD */}

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="
          border
          border-[#202020]
          overflow-hidden
          "
        >

          {/* IMAGE */}

          <div className="relative h-[650px]">

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              alt="Circuit"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-12 left-12">

              <div
                className="
                uppercase
                tracking-[5px]
                text-[#FFC000]
                mb-4
                "
              >
                Italian Grand Prix
              </div>

              <h3
                className="
                text-[80px]
                uppercase
                font-light
                leading-none
                "
              >
                Monza
              </h3>

            </div>

          </div>

          {/* STATS */}

          <div
            className="
            grid
            md:grid-cols-4
            border-t
            border-[#202020]
            "
          >

            <div className="p-10 border-r border-[#202020]">
              <p className="text-[#7D7D7D] uppercase text-sm mb-2">
                Length
              </p>

              <h4 className="text-[36px] font-light">
                5.79 KM
              </h4>
            </div>

            <div className="p-10 border-r border-[#202020]">
              <p className="text-[#7D7D7D] uppercase text-sm mb-2">
                Corners
              </p>

              <h4 className="text-[36px] font-light">
                11
              </h4>
            </div>

            <div className="p-10 border-r border-[#202020]">
              <p className="text-[#7D7D7D] uppercase text-sm mb-2">
                Top Speed
              </p>

              <h4 className="text-[36px] font-light">
                372 KM/H
              </h4>
            </div>

            <div className="p-10">
              <button
                className="
                w-full
                py-5
                border
                border-[#FFC000]
                uppercase
                tracking-[3px]
                text-[#FFC000]
                hover:bg-[#FFC000]
                hover:text-black
                transition-all
                duration-300
                "
              >
                View Circuit
              </button>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}