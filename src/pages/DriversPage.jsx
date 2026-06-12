import drivers from "../data/drivers";

export default function DriversPage() {
  const sortedDrivers = [...drivers].sort(
    (a, b) => b.points - a.points
  );

  const totalWins = drivers.reduce(
    (sum, driver) => sum + driver.wins,
    0
  );

  const totalPodiums = drivers.reduce(
    (sum, driver) => sum + driver.podiums,
    0
  );

  const totalChampionships = drivers.reduce(
    (sum, driver) => sum + driver.championships,
    0
  );

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="pt-32 pb-24 border-b border-[#202020]">

        <div className="max-w-[1600px] mx-auto px-16">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-6">
            Driver Intelligence Platform
          </p>

          <h1
            className="
            text-[90px]
            lg:text-[160px]
            font-light
            uppercase
            leading-none
            "
          >
            Drivers
          </h1>

          <div className="grid lg:grid-cols-4 gap-8 mt-20">

            <div>
              <p className="text-[#7D7D7D] mb-3">
                Active Drivers
              </p>

              <p className="text-5xl">
                {drivers.length}
              </p>
            </div>

            <div>
              <p className="text-[#7D7D7D] mb-3">
                Total Wins
              </p>

              <p className="text-5xl text-[#FFC000]">
                {totalWins}
              </p>
            </div>

            <div>
              <p className="text-[#7D7D7D] mb-3">
                Total Podiums
              </p>

              <p className="text-5xl">
                {totalPodiums}
              </p>
            </div>

            <div>
              <p className="text-[#7D7D7D] mb-3">
                Championships
              </p>

              <p className="text-5xl">
                {totalChampionships}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* DRIVER GRID */}

      <section className="py-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Driver Database
            </p>

            <h2 className="text-6xl font-light uppercase">
              Elite Drivers
            </h2>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {drivers.map((driver) => (

              <div
                key={driver.id}
                className="
                border
                border-[#202020]
                bg-[#111111]
                overflow-hidden
                hover:border-[#FFC000]
                transition-all
                duration-300
                group
                "
              >

                <div className="h-[520px] overflow-hidden">

                  <img
                    src={driver.image}
                    alt={driver.name}
                    className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                    "
                  />

                </div>

                <div className="p-8">

                  <p
                    className="
                    uppercase
                    tracking-[4px]
                    text-sm
                    mb-4
                    "
                    style={{
                      color: driver.teamColor,
                    }}
                  >
                    {driver.team}
                  </p>

                  <h3 className="text-4xl font-light mb-8">
                    {driver.name}
                  </h3>

                  <div className="space-y-3">

                    <div className="flex justify-between">
                      <span className="text-[#7D7D7D]">
                        Championships
                      </span>

                      <span>
                        {driver.championships}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#7D7D7D]">
                        Wins
                      </span>

                      <span>
                        {driver.wins}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#7D7D7D]">
                        Podiums
                      </span>

                      <span>
                        {driver.podiums}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#7D7D7D]">
                        Poles
                      </span>

                      <span>
                        {driver.poles}
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DRIVER RANKINGS */}

      <section className="pb-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Season Rankings
            </p>

            <h2 className="text-6xl font-light uppercase">
              Championship Standings
            </h2>

          </div>

          <div className="border border-[#202020]">

            {sortedDrivers.map((driver, index) => (

              <div
                key={driver.id}
                className="
                p-8
                border-b
                border-[#202020]
                "
              >

                <div className="grid grid-cols-4 items-center">

                  <div
                    className="text-4xl"
                    style={{
                      color: driver.teamColor,
                    }}
                  >
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl">
                      {driver.name}
                    </h3>

                    <p className="text-[#7D7D7D]">
                      {driver.team}
                    </p>
                  </div>

                  <div>

                    <div className="h-3 bg-[#202020]">

                      <div
                        className="h-full"
                        style={{
                          width: `${(driver.points / 500) * 100}%`,
                          backgroundColor:
                            driver.teamColor,
                        }}
                      />

                    </div>

                  </div>

                  <div className="text-right text-3xl">
                    {driver.points}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HALL OF FAME */}

      <section className="pb-32">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Career Records
            </p>

            <h2 className="text-6xl font-light uppercase">
              Hall Of Fame
            </h2>

          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            <div className="border border-[#202020] p-10">
              <p className="text-[#7D7D7D] mb-4">
                Most Wins
              </p>

              <h3 className="text-4xl mb-4">
                Lewis Hamilton
              </h3>

              <p className="text-[#FFC000] text-5xl">
                105
              </p>
            </div>

            <div className="border border-[#202020] p-10">
              <p className="text-[#7D7D7D] mb-4">
                Most Championships
              </p>

              <h3 className="text-4xl mb-4">
                Lewis Hamilton
              </h3>

              <p className="text-[#FFC000] text-5xl">
                7
              </p>
            </div>

            <div className="border border-[#202020] p-10">
              <p className="text-[#7D7D7D] mb-4">
                Most Podiums
              </p>

              <h3 className="text-4xl mb-4">
                Lewis Hamilton
              </h3>

              <p className="text-[#FFC000] text-5xl">
                202
              </p>
            </div>

            <div className="border border-[#202020] p-10">
              <p className="text-[#7D7D7D] mb-4">
                Current Leader
              </p>

              <h3 className="text-4xl mb-4">
                Max Verstappen
              </h3>

              <p className="text-[#FFC000] text-5xl">
                437
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}