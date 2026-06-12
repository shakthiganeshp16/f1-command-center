export default function AnalyticsPreview() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">

      <div className="max-w-[1600px] mx-auto px-16">

        <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
          Performance Intelligence
        </p>

        <h2 className="text-[72px] lg:text-[96px] uppercase font-light mb-20">
          Analytics Preview
        </h2>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="border border-[#202020] p-8">
            <p className="text-[#7D7D7D] uppercase mb-2">
              Fastest Driver
            </p>

            <h3 className="text-3xl uppercase text-[#FFC000]">
              Verstappen
            </h3>
          </div>

          <div className="border border-[#202020] p-8">
            <p className="text-[#7D7D7D] uppercase mb-2">
              Pole Positions
            </p>

            <h3 className="text-3xl uppercase">
              11
            </h3>
          </div>

          <div className="border border-[#202020] p-8">
            <p className="text-[#7D7D7D] uppercase mb-2">
              Team Leader
            </p>

            <h3 className="text-3xl uppercase">
              McLaren
            </h3>
          </div>

          <div className="border border-[#FFC000] p-8">
            <p className="text-[#FFC000] uppercase mb-2">
              Total Points
            </p>

            <h3 className="text-3xl uppercase">
              2874
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}