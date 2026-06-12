import { motion } from "framer-motion";

const races = [
  {
    round: "01",
    name: "Australia",
    circuit: "Albert Park",
    date: "16 MAR",
  },
  {
    round: "02",
    name: "Japan",
    circuit: "Suzuka",
    date: "06 APR",
  },
  {
    round: "03",
    name: "China",
    circuit: "Shanghai",
    date: "20 APR",
  },
  {
    round: "04",
    name: "Miami",
    circuit: "Miami International",
    date: "04 MAY",
  },
  {
    round: "05",
    name: "Monaco",
    circuit: "Monte Carlo",
    date: "25 MAY",
  },
  {
    round: "06",
    name: "Silverstone",
    circuit: "British GP",
    date: "06 JUL",
  },
  {
    round: "07",
    name: "Monza",
    circuit: "Italian GP",
    date: "07 SEP",
  },
  {
    round: "08",
    name: "Abu Dhabi",
    circuit: "Yas Marina",
    date: "07 DEC",
  },
];

export default function RaceCalendarTimeline() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">

      <div className="max-w-[1400px] mx-auto px-12">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
            Season Schedule
          </p>

          <h2
            className="
            uppercase
            text-[72px]
            lg:text-[96px]
            font-light
            leading-none
            "
          >
            Race Calendar
          </h2>

        </div>

        <div className="relative">

          {/* CENTER LINE */}

          <div
            className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-[#202020]
            -translate-x-1/2
            "
          />

          {races.map((race, index) => (

            <motion.div
              key={race.round}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`
                relative
                flex
                mb-20
                ${index % 2 === 0 ? "justify-start" : "justify-end"}
              `}
            >

              <div
                className="
                w-full
                lg:w-[45%]
                bg-[#111]
                border
                border-[#202020]
                p-8
                hover:border-[#FFC000]
                transition-all
                duration-300
                "
              >

                <div className="text-[#FFC000] text-sm tracking-[4px] mb-4">
                  ROUND {race.round}
                </div>

                <h3 className="text-[42px] uppercase font-light mb-3">
                  {race.name}
                </h3>

                <p className="text-[#7D7D7D] mb-6">
                  {race.circuit}
                </p>

                <div className="text-white text-xl">
                  {race.date}
                </div>

              </div>

              {/* DOT */}

              <div
                className="
                absolute
                left-1/2
                top-10
                w-5
                h-5
                bg-[#FFC000]
                rounded-full
                -translate-x-1/2
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
