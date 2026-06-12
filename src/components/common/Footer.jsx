export default function Footer() {
  return (
    <footer className="border-t border-[#202020] py-20 bg-black">

      <div className="max-w-[1600px] mx-auto px-16">

        <div className="grid lg:grid-cols-3 gap-12">

          <div>
            <h3 className="text-3xl uppercase mb-6">
              F1CC
            </h3>

            <p className="text-[#7D7D7D] max-w-md">
              Formula One Command Center is a luxury racing
              intelligence platform inspired by telemetry,
              analytics and elite motorsport engineering.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[4px] mb-6">
              Platform
            </h4>

            <div className="space-y-3 text-[#7D7D7D]">
              <p>Drivers</p>
              <p>Teams</p>
              <p>Analytics</p>
              <p>Race Center</p>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-[4px] mb-6">
              Technology
            </h4>

            <div className="space-y-3 text-[#7D7D7D]">
              <p>React</p>
              <p>Vite</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
            </div>
          </div>

        </div>

        <div className="border-t border-[#202020] mt-16 pt-8 text-[#7D7D7D]">

          © 2026 F1 Command Center

        </div>

      </div>

    </footer>
  );
}