// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },scored_goalss:function(index){
        //print the number of players given the 
        for (const player of this.players[index])
            
            console.log(player,this.goals_perplayer(player));
            goal=0
    },
    goals_perplayer:function(name_player){
        let score=0
        for (const val of game.scored){
            if (name_player===val){
                score=score+1
            }
            // console.log(name_player,score);
        }
        return score
    }
  };
  //part 1
const team1=game.players[0]
//   const team2=game.players[1]
  console.log(team1);
  console.log(team2);

  //part 2
const t1_gk=game.players[0][0]
const t1_players=team1.slice(1)
const t2_players=team2.slice(1)
const t2_gk=game.players[1][0]
console.log(t1_players);
console.log(t2_players);
console.log(t1_gk);
console.log(t2_gk);

//part 3
const merge_player=[...team1,...team2]
console.log(merge_player);
//part 4
const final_team1=['Thiago','Coutinho','Perisic',...team1]
console.log(final_team1);
//part 5
const team1_odd=game.odds.team1;
const team2_odd=game.odds.team2;
const odd_draw=game.odds.x;
console.log(team1_odd,odd_draw,team2_odd);
//part 6
game.scored_goalss(0)
game.goals_perplayer("Lewandowski")
//part 7
const {odds:{team1,x:draw,team2}}=game
console.log(odds);

//check which team is more likly to win
team1<team2 && console.log("team 1 will win");
team2<team1 && console.log("team 2 will win");