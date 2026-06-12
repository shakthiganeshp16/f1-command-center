import drivers from "../../data/drivers";

export default function FeaturedDrivers() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">

      <div className="max-w-[1600px] mx-auto px-16">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20">

          <div>

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Elite Driver Analytics
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
              Featured
              <br />
              Drivers
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
            Explore the world's fastest drivers through
            advanced telemetry, race intelligence and
            performance analytics.
          </p>

        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {drivers.map((driver) => (

            <div
              key={driver.id}
              className="
              bg-[#202020]
              border
              border-[#303030]
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              "
            >

              {/* IMAGE */}

              <div className="h-[560px] bg-[#111111] overflow-hidden">

                <img
                  src={driver.image}
                  alt={driver.name}
                  className="
                  w-full
                  h-full
                  object-cover
                  object-top
                  transition-all
                  duration-700
                  hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-8">

                {/* NUMBER */}

                <div
                  className="
                  text-[56px]
                  font-light
                  leading-none
                  mb-4
                  "
                  style={{ color: driver.color }}
                >
                  #{driver.number}
                </div>

                {/* TEAM */}

                <div
                  className="
                  uppercase
                  tracking-[4px]
                  text-xs
                  mb-4
                  "
                  style={{ color: driver.color }}
                >
                  {driver.team}
                </div>

                {/* NAME */}

                <h3
                  className="
                  uppercase
                  text-[28px]
                  mb-8
                  "
                >
                  {driver.name}
                </h3>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-6">

                  <div>

                    <p className="text-[#7D7D7D] text-sm mb-1">
                      Championships
                    </p>

                    <p
                      className="text-2xl"
                      style={{ color: driver.color }}
                    >
                      {driver.championships}
                    </p>

                  </div>

                  <div>

                    <p className="text-[#7D7D7D] text-sm mb-1">
                      Wins
                    </p>

                    <p className="text-2xl">
                      {driver.wins}
                    </p>

                  </div>

                  <div>

                    <p className="text-[#7D7D7D] text-sm mb-1">
                      Pole Positions
                    </p>

                    <p className="text-2xl">
                      {driver.poles}
                    </p>

                  </div>

                  <div>

                    <p className="text-[#7D7D7D] text-sm mb-1">
                      Podiums
                    </p>

                    <p className="text-2xl">
                      {driver.podiums}
                    </p>

                  </div>

                </div>

                {/* NATIONALITY */}

                <div className="mt-8 pt-6 border-t border-[#494949]">

                  <p className="text-[#7D7D7D] text-sm mb-2">
                    Nationality
                  </p>

                  <p className="uppercase tracking-[2px]">
                    {driver.nationality}
                  </p>

                </div>

                {/* BUTTON */}

                <button
                  className="
                  mt-8
                  w-full
                  py-4
                  uppercase
                  tracking-[3px]
                  border
                  border-[#494949]
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  "
                >
                  View Profile
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}