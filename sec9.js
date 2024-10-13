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

/*console.log(team1, team2, draw);

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
*/
// *********** Practice ************

//Maps: Iteration;
/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
//console.log(Object.entries(openingHours));
//const hoursMap = new Map(Object.entries(openingHours));
//console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = 1;

console.log(question.get(answer === question.get("correct")));
*/
// *********** Challenge2 ************
//2.1

//.entries work with list to return index and item
for (const [i, item] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${item}`);
}
//2.2
function calc_avg(odds) {
  let avg = 0;
  for (const odd of Object.values(odds)) {
    avg += odd;
  }
  console.log(avg);
  console.log(Object.values(odds));
  avg /= Object.values(odds).length;
  console.log(avg);
}

calc_avg(game.odds);
//2.3
for ([key, val] of Object.entries(game.odds)) {
  const teamScore = key === "x" ? "draw" : `vectory ${game[key]}`;
  console.log(`Odd of ${teamScore}: ${val}`);
}

// *********** Challenge3 ************

// *********** Challenge4 ************
