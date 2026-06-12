import races from "../data/races";
import drivers from "../data/drivers";

export default function RaceCenterPage() {
  const race = races[0];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="pt-32 pb-24 border-b border-[#202020]">

        <div className="max-w-[1600px] mx-auto px-16">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-6">
            Round {race.round}
          </p>

          <h1
            className="
            text-[80px]
            lg:text-[150px]
            uppercase
            font-light
            leading-none
            "
          >
            {race.grandPrix}
          </h1>

          <div className="mt-12 grid lg:grid-cols-4 gap-8">

            <div>
              <p className="text-[#7D7D7D]">Circuit</p>
              <p className="text-2xl">{race.circuit}</p>
            </div>

            <div>
              <p className="text-[#7D7D7D]">Country</p>
              <p className="text-2xl">{race.country}</p>
            </div>

            <div>
              <p className="text-[#7D7D7D]">Race Date</p>
              <p className="text-2xl">{race.date}</p>
            </div>

            <div>
              <p className="text-[#7D7D7D]">Track Status</p>
              <p className="text-2xl text-green-400">
                GREEN
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WEEKEND TIMELINE */}

      <section className="py-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <h2 className="text-6xl font-light uppercase mb-16">
            Weekend Schedule
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="border border-[#202020] p-10">
              <h3 className="text-3xl mb-8">Friday</h3>

              <div className="space-y-6">
                <div>
                  <p>Practice 1</p>
                  <p className="text-[#7D7D7D]">10:30</p>
                </div>

                <div>
                  <p>Practice 2</p>
                  <p className="text-[#7D7D7D]">14:00</p>
                </div>
              </div>
            </div>

            <div className="border border-[#202020] p-10">
              <h3 className="text-3xl mb-8">Saturday</h3>

              <div className="space-y-6">
                <div>
                  <p>Practice 3</p>
                  <p className="text-[#7D7D7D]">11:30</p>
                </div>

                <div>
                  <p>Qualifying</p>
                  <p className="text-[#FFC000]">15:00</p>
                </div>
              </div>
            </div>

            <div className="border border-[#202020] p-10">
              <h3 className="text-3xl mb-8">Sunday</h3>

              <div>
                <p>Race</p>
                <p className="text-[#FFC000]">15:00</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* CIRCUIT INTELLIGENCE */}

      <section className="pb-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <h2 className="text-6xl font-light uppercase mb-16">
            Circuit Intelligence
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Length</p>
              <p className="text-3xl">{race.length}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Corners</p>
              <p className="text-3xl">{race.corners}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">DRS Zones</p>
              <p className="text-3xl">{race.drsZones}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Laps</p>
              <p className="text-3xl">{race.laps}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Lap Record</p>
              <p className="text-3xl">{race.lapRecord}</p>
            </div>

          </div>

        </div>

      </section>

      {/* WEATHER */}

      <section className="pb-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <h2 className="text-6xl font-light uppercase mb-16">
            Weather Intelligence
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Air Temp</p>
              <p className="text-4xl">{race.airTemp}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Track Temp</p>
              <p className="text-4xl">{race.trackTemp}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Humidity</p>
              <p className="text-4xl">{race.humidity}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Rain Risk</p>
              <p className="text-4xl">{race.rainChance}</p>
            </div>

            <div className="border border-[#202020] p-8">
              <p className="text-[#7D7D7D]">Wind</p>
              <p className="text-4xl">{race.wind}</p>
            </div>

          </div>

        </div>

      </section>

      {/* PODIUM PREDICTION */}

      <section className="pb-32">

        <div className="max-w-[1600px] mx-auto px-16">

          <h2 className="text-6xl font-light uppercase mb-16">
            Podium Prediction
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            {drivers.slice(0, 3).map((driver, index) => (

              <div
                key={driver.id}
                className="
                border
                border-[#202020]
                bg-[#111111]
                overflow-hidden
                "
              >

                <img
                  src={driver.image}
                  alt={driver.name}
                  className="
                  h-[420px]
                  w-full
                  object-cover
                  object-top
                  "
                />

                <div className="p-8">

                  <p className="text-[#FFC000] mb-3">
                    P{index + 1}
                  </p>

                  <h3 className="text-4xl">
                    {driver.name}
                  </h3>

                  <p className="text-[#7D7D7D] mt-3">
                    {driver.team}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}