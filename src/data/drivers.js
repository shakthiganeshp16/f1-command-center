import verstappen from "../assets/drivers/verstappen.jpg";
import norris from "../assets/drivers/norris.jpg";
import leclerc from "../assets/drivers/leclerc.jpg";
import hamilton from "../assets/drivers/hamilton.jpg";

const drivers = [
  {
    id: 1,
    number: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    nationality: "Netherlands",
    championships: 4,
    podiums: 112,
    poles: 40,
    wins: 63,
    points: 437,
    age: 27,
    debut: 2015,
    teamColor: "#0600EF",
    image: verstappen,
  },

  {
    id: 2,
    number: 4,
    name: "Lando Norris",
    team: "McLaren",
    nationality: "United Kingdom",
    championships: 0,
    podiums: 29,
    poles: 9,
    wins: 4,
    points: 374,
    age: 25,
    debut: 2019,
    teamColor: "#FF8000",
    image: norris,
  },

  {
    id: 3,
    number: 16,
    name: "Charles Leclerc",
    team: "Ferrari",
    nationality: "Monaco",
    championships: 0,
    podiums: 42,
    poles: 26,
    wins: 8,
    points: 356,
    age: 27,
    debut: 2018,
    teamColor: "#DC0000",
    image: leclerc,
  },

  {
    id: 4,
    number: 44,
    name: "Lewis Hamilton",
    team: "Mercedes",
    nationality: "United Kingdom",
    championships: 7,
    podiums: 202,
    poles: 104,
    wins: 105,
    points: 332,
    age: 40,
    debut: 2007,
    teamColor: "#00D2BE",
    image: hamilton,
  },
];

export default drivers;