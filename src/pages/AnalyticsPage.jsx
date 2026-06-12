import { motion } from "framer-motion";

const teams = [
  { name: "McLaren", points: 670 },
  { name: "Red Bull", points: 640 },
  { name: "Ferrari", points: 610 },
  { name: "Mercedes", points: 580 },
];

const drivers = [
  { name: "Verstappen", pace: 98 },
  { name: "Norris", pace: 94 },
  { name: "Leclerc", pace: 89 },
  { name: "Hamilton", pace: 85 },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="pt-40 pb-24 border-b border-[#202020]">

        <div className="max-w-[1600px] mx-auto px-16">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-6">
            Performance Intelligence
          </p>

          <h1
            className="
            text-[90px]
            lg:text-[140px]
            uppercase
            font-light
            leading-none
            "
          >
            Analytics
          </h1>

        </div>

      </section>

      {/* CHAMPIONSHIP FORECAST */}

      <section className="py-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <div
            className="
            border
            border-[#202020]
            p-16
            mb-16
            "
          >

            <p className="uppercase tracking-[6px] text-[#7D7D7D] mb-8">
              Championship Forecast
            </p>

            <div className="flex items-center justify-between flex-wrap gap-10">

              <div>

                <div className="text-[120px] text-[#FFC000] leading-none">
                  78%
                </div>

                <p className="text-2xl mt-4">
                  Max Verstappen Win Probability
                </p>

              </div>

              <div className="w-[400px]">

                <div className="h-4 bg-[#202020]">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-[#FFC000]"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* TEAM BATTLE */}

          <div
            className="
            border
            border-[#202020]
            p-16
            mb-16
            "
          >

            <h2 className="text-5xl font-light uppercase mb-12">
              Constructor Battle
            </h2>

            <div className="space-y-8">

              {teams.map((team) => (

                <div key={team.name}>

                  <div className="flex justify-between mb-3">

                    <span>{team.name}</span>

                    <span>{team.points}</span>

                  </div>

                  <div className="h-3 bg-[#202020]">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(team.points / 700) * 100}%`,
                      }}
                      transition={{ duration: 1 }}
                      className="h-full bg-[#FFC000]"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* DRIVER PACE */}

          <div className="grid lg:grid-cols-2 gap-10">

            <div
              className="
              border
              border-[#202020]
              p-12
              "
            >

              <h2 className="text-4xl uppercase mb-10">
                Driver Pace Index
              </h2>

              <div className="space-y-8">

                {drivers.map((driver) => (

                  <div key={driver.name}>

                    <div className="flex justify-between mb-3">

                      <span>{driver.name}</span>

                      <span>{driver.pace}</span>

                    </div>

                    <div className="h-3 bg-[#202020]">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${driver.pace}%`,
                        }}
                        transition={{ duration: 1 }}
                        className="h-full bg-[#FFC000]"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* PERFORMANCE METRICS */}

            <div
              className="
              border
              border-[#202020]
              p-12
              "
            >

              <h2 className="text-4xl uppercase mb-10">
                Season Metrics
              </h2>

              <div className="grid grid-cols-2 gap-8">

                <div>
                  <p className="text-[#7D7D7D] mb-2">
                    Fastest Lap
                  </p>

                  <p className="text-5xl text-[#FFC000]">
                    1:18.4
                  </p>
                </div>

                <div>
                  <p className="text-[#7D7D7D] mb-2">
                    Overtakes
                  </p>

                  <p className="text-5xl">
                    63
                  </p>
                </div>

                <div>
                  <p className="text-[#7D7D7D] mb-2">
                    Pole Positions
                  </p>

                  <p className="text-5xl">
                    8
                  </p>
                </div>

                <div>
                  <p className="text-[#7D7D7D] mb-2">
                    Podiums
                  </p>

                  <p className="text-5xl">
                    17
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}