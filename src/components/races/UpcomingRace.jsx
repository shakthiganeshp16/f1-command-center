export default function UpcomingRace() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">

      <div className="max-w-[1600px] mx-auto px-16">

        <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
          Next Grand Prix
        </p>

        <h2 className="text-[72px] lg:text-[96px] uppercase font-light mb-20">
          Singapore GP
        </h2>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="border border-[#202020] p-8">
            <p className="text-[#7D7D7D] mb-3 uppercase">
              Circuit
            </p>

            <h3 className="text-3xl uppercase">
              Marina Bay
            </h3>
          </div>

          <div className="border border-[#202020] p-8">
            <p className="text-[#7D7D7D] mb-3 uppercase">
              Date
            </p>

            <h3 className="text-3xl uppercase">
              Sept 21
            </h3>
          </div>

          <div className="border border-[#202020] p-8">
            <p className="text-[#7D7D7D] mb-3 uppercase">
              Laps
            </p>

            <h3 className="text-3xl uppercase">
              62
            </h3>
          </div>

          <div className="border border-[#FFC000] p-8">
            <p className="text-[#FFC000] mb-3 uppercase">
              Countdown
            </p>

            <h3 className="text-3xl uppercase">
              08 Days
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}