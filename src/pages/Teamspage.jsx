import teams from "../data/teams";

export default function TeamsPage() {
  const sortedTeams = [...teams].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="pt-32 pb-24 border-b border-[#202020]">

        <div className="max-w-[1600px] mx-auto px-16">

          <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-6">
            Constructor Intelligence Platform
          </p>

          <h1
            className="
            text-[90px]
            lg:text-[160px]
            uppercase
            font-light
            leading-none
            "
          >
            Teams
          </h1>

          <p
            className="
            mt-8
            text-[#7D7D7D]
            text-xl
            max-w-3xl
            "
          >
            Explore Formula One constructor performance,
            championship history, engineering dominance
            and competitive intelligence.
          </p>

        </div>

      </section>

      {/* STANDINGS TABLE */}

      <section className="py-24">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Live Rankings
            </p>

            <h2 className="text-6xl font-light uppercase">
              Constructor Standings
            </h2>

          </div>

          <div className="border border-[#202020]">

            {sortedTeams.map((team, index) => (

              <div
                key={team.id}
                className="
                border-b
                border-[#202020]
                p-8
                hover:bg-[#111111]
                transition-all
                duration-300
                "
              >

                <div className="grid grid-cols-5 items-center">

                  <div
                    className="text-4xl font-light"
                    style={{
                      color: team.color,
                    }}
                  >
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-3xl uppercase">
                      {team.name}
                    </h3>

                    <p className="text-[#7D7D7D]">
                      {team.base}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-[#7D7D7D] mb-2">
                      Titles
                    </p>

                    <p className="text-3xl">
                      {team.championships}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-[#7D7D7D] mb-2">
                      Points
                    </p>

                    <p
                      className="text-3xl"
                      style={{
                        color: team.color,
                      }}
                    >
                      {team.points}
                    </p>
                  </div>

                  <div>

                    <div className="h-3 bg-[#202020]">

                      <div
                        className="h-full"
                        style={{
                          width: `${(team.points / 900) * 100}%`,
                          backgroundColor: team.color,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TEAM CARDS */}

      <section className="pb-32">

        <div className="max-w-[1600px] mx-auto px-16">

          <div className="mb-16">

            <p className="uppercase tracking-[8px] text-[#7D7D7D] mb-4">
              Team Profiles
            </p>

            <h2 className="text-6xl font-light uppercase">
              Constructor Overview
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {teams.map((team) => (

              <div
                key={team.id}
                className="
                border
                border-[#202020]
                bg-[#111111]
                p-10
                "
              >

                <div
                  className="w-20 h-2 mb-8"
                  style={{
                    backgroundColor: team.color,
                  }}
                />

                <h3
                  className="text-5xl font-light mb-8"
                  style={{
                    color: team.color,
                  }}
                >
                  {team.name}
                </h3>

                <div className="grid grid-cols-2 gap-8">

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      Headquarters
                    </p>

                    <p>{team.base}</p>
                  </div>

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      Championships
                    </p>

                    <p>{team.championships}</p>
                  </div>

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      Points
                    </p>

                    <p>{team.points}</p>
                  </div>

                  <div>
                    <p className="text-[#7D7D7D] mb-2">
                      Status
                    </p>

                    <p style={{ color: team.color }}>
                      Competitive
                    </p>
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