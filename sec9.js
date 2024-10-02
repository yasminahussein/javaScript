const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1-Destructing
let [players1, players2] = game.players; //equal to let players1 = game.players[0]; && let players2 = game.players[1];

//2- rest syntax
let [gk, ...fieldPlayers1] = players1;

//3- Spread operator
let allPlayers = [...players1, ...players2];

//4- adding players to an array :first spread and then add new players
let playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];

//5-nested destructing
// to rename : write( old namm : new name ) ,Ex (x: draw)
let {
  odds: { team1, x: draw, team2 },
} = game; //== let { team1, x: draw, team2 } = game.odds;

console.log(team1, team2, draw);

// 6- create function that take an arbitrary number of player names (not an array) and prints the total number as score to the console,So we use spread operator
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored); //have to spread cause if not it will pass as one object not as an array of elements

// 7- not use if  we will use short circuits(&& , || ,!)
// we used & cause it returns the last True or first false
team1 < team2 && console.log("team1 is likelly to win");
team2 < team1 && console.log("team2 is likelly to win");
