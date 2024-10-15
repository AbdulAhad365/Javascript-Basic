const res1={
    name:"chilli",
    newguest:0
}
const res2={
    name:"billi",
    owner:"ahad"
}
//IN CASE OF OTHER VALUES IS FAILED
// res1.newguest=res1.newguest||10

res2.newguest=res2.newguest&&32;
//in this case 0 remains the same
console.log(res1);

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
//   const team1=game.players[0]
// //   const team2=game.players[1]
//   console.log(team1);
//   console.log(team2);

//   //part 2
// const t1_gk=game.players[0][0]
// const t1_players=team1.slice(1)
// const t2_players=team2.slice(1)
// const t2_gk=game.players[1][0]
// console.log(t1_players);
// console.log(t2_players);
// console.log(t1_gk);
// console.log(t2_gk);

// //part 3
// const merge_player=[...team1,...team2]
// console.log(merge_player);
// //part 4
// const final_team1=['Thiago','Coutinho','Perisic',...team1]
// console.log(final_team1);
// //part 5
// const team1_odd=game.odds.team1;
// const team2_odd=game.odds.team2;
// const odd_draw=game.odds.x;
// console.log(team1_odd,odd_draw,team2_odd);
// //part 6
// game.scored_goalss(0)
// game.goals_perplayer("Lewandowski")
//part 7
const {odds:{team1,x:draw,team2}}=game
console.log(odds);