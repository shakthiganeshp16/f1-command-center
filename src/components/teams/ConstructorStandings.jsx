const teams = [
  { name: "McLaren", points: 666 },
  { name: "Ferrari", points: 652 },
  { name: "Red Bull", points: 589 },
  { name: "Mercedes", points: 468 },
  { name: "Aston Martin", points: 94 },
];

export default function ConstructorStandings() {
  return (
    <section className="py-32 border-t border-[#202020] bg-black">
      <div className="max-w-[1600px] mx-auto px-16">

        <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
          Constructor Championship
        </p>

        <h2 className="text-[72px] lg:text-[96px] uppercase font-light mb-20">
          Team Standings
        </h2>

        <div className="space-y-6">
          {teams.map((team, index) => (
            <div
              key={team.name}
              className="border border-[#202020] p-8 hover:border-[#FFC000] transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-10 items-center">
                  <span className="text-[#FFC000] text-xl">
                    0{index + 1}
                  </span>

                  <h3 className="text-3xl uppercase">
                    {team.name}
                  </h3>
                </div>

                <span className="text-3xl">
                  {team.points}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}