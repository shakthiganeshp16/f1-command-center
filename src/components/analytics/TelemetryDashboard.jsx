const telemetryData = [
  {
    title: "TOP SPEED",
    display: "348",
    unit: "KM/H",
    percentage: 96,
  },
  {
    title: "DRS USAGE",
    display: "72",
    unit: "%",
    percentage: 72,
  },
  {
    title: "TYRE LIFE",
    display: "81",
    unit: "%",
    percentage: 81,
  },
  {
    title: "RACE PACE",
    display: "96",
    unit: "%",
    percentage: 96,
  },
];

export default function TelemetryDashboard() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">

      <div className="max-w-[1600px] mx-auto px-16">

        <div className="mb-20">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-6">
            Live Data Stream
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
            Telemetry
            <br />
            Dashboard
          </h2>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {telemetryData.map((item) => (

            <div
              key={item.title}
              className="
              border
              border-[#202020]
              p-12
              hover:border-[#FFC000]
              transition-all
              duration-300
              "
            >

              <div className="text-[#7D7D7D] uppercase text-xl mb-10">
                {item.title}
              </div>

              <div className="flex items-end gap-3 mb-10">

                <span className="text-[72px] text-[#FFC000] leading-none">
                  {item.display}
                </span>

                <span className="text-[#7D7D7D] text-2xl mb-3">
                  {item.unit}
                </span>

              </div>

              {/* Progress Bar */}

              <div className="w-full h-3 bg-[#202020]">

                <div
                  className="h-full bg-[#FFC000]"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}