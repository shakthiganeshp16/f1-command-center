const circuits = [
  {
    id: 1,
    name: "Silverstone",
    country: "United Kingdom",
    length: "5.891 km",
    corners: 18,
    drs: 2,
    overtaking: 92,
    tyreWear: 68,
    braking: 74,
    downforce: 81,
  },

  {
    id: 2,
    name: "Monza",
    country: "Italy",
    length: "5.793 km",
    corners: 11,
    drs: 2,
    overtaking: 95,
    tyreWear: 60,
    braking: 94,
    downforce: 45,
  },

  {
    id: 3,
    name: "Spa-Francorchamps",
    country: "Belgium",
    length: "7.004 km",
    corners: 19,
    drs: 2,
    overtaking: 89,
    tyreWear: 73,
    braking: 82,
    downforce: 78,
  },

  {
    id: 4,
    name: "Suzuka",
    country: "Japan",
    length: "5.807 km",
    corners: 18,
    drs: 1,
    overtaking: 70,
    tyreWear: 86,
    braking: 72,
    downforce: 91,
  },
];

export default function CircuitPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="pt-32 pb-24 border-b border-[#202020]">

        <div className="max-w-[1600px] mx-auto px-16">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-6">
            Circuit Intelligence Platform
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
            Circuits
          </h1>

          <p
            className="
            text-[#7D7D7D]
            text-xl
            max-w-3xl
            mt-8
            "
          >
            Explore Formula One tracks through advanced
            performance metrics, circuit intelligence,
            sector analysis and race strategy indicators.
          </p>

        </div>

      </section>

      {/* CIRCUIT DATABASE */}

      <section className="py-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Circuit Database
            </p>

            <h2 className="text-6xl font-light uppercase">
              Track Collection
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {circuits.map((circuit) => (

              <div
                key={circuit.id}
                className="
                border
                border-[#202020]
                bg-[#111111]
                p-10
                hover:border-[#FFC000]
                transition-all
                duration-300
                "
              >

                <div className="flex justify-between items-start mb-10">

                  <div>

                    <p className="text-[#FFC000] uppercase tracking-[4px] mb-4">
                      {circuit.country}
                    </p>

                    <h3 className="text-5xl font-light">
                      {circuit.name}
                    </h3>

                  </div>

                  <span className="text-6xl text-[#FFC000]">
                    0{circuit.id}
                  </span>

                </div>

                <div className="grid grid-cols-3 gap-6">

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      Length
                    </p>

                    <p>{circuit.length}</p>
                  </div>

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      Corners
                    </p>

                    <p>{circuit.corners}</p>
                  </div>

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      DRS Zones
                    </p>

                    <p>{circuit.drs}</p>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TRACK CHARACTERISTICS */}

      <section className="pb-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Performance Metrics
            </p>

            <h2 className="text-6xl font-light uppercase">
              Track Characteristics
            </h2>

          </div>

          {circuits.map((circuit) => (

            <div
              key={circuit.name}
              className="
              border
              border-[#202020]
              p-10
              mb-10
              "
            >

              <h3 className="text-4xl mb-10">
                {circuit.name}
              </h3>

              <div className="space-y-8">

                <MetricBar
                  label="Overtaking"
                  value={circuit.overtaking}
                />

                <MetricBar
                  label="Tyre Wear"
                  value={circuit.tyreWear}
                />

                <MetricBar
                  label="Braking Demand"
                  value={circuit.braking}
                />

                <MetricBar
                  label="Downforce Requirement"
                  value={circuit.downforce}
                />

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CIRCUIT RANKINGS */}

      <section className="pb-32">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Rankings
            </p>

            <h2 className="text-6xl font-light uppercase">
              Best Overtaking Tracks
            </h2>

          </div>

          <div className="border border-[#202020]">

            {[...circuits]
              .sort((a, b) => b.overtaking - a.overtaking)
              .map((circuit, index) => (

                <div
                  key={circuit.id}
                  className="
                  border-b
                  border-[#202020]
                  p-8
                  "
                >

                  <div className="grid grid-cols-4 items-center">

                    <div className="text-4xl text-[#FFC000]">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-2xl">
                        {circuit.name}
                      </h3>

                      <p className="text-[#7D7D7D]">
                        {circuit.country}
                      </p>
                    </div>

                    <div>

                      <div className="h-3 bg-[#202020]">

                        <div
                          className="h-full bg-[#FFC000]"
                          style={{
                            width: `${circuit.overtaking}%`,
                          }}
                        />

                      </div>

                    </div>

                    <div className="text-right text-2xl">
                      {circuit.overtaking}
                    </div>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </section>

    </div>
  );
}

function MetricBar({ label, value }) {
  return (
    <div>

      <div className="flex justify-between mb-3">

        <span>{label}</span>

        <span>{value}</span>

      </div>

      <div className="h-3 bg-[#202020]">

        <div
          className="h-full bg-[#FFC000]"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}