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

  
  //use for each
  const arr=[...game.players[0],...game.players[1]]
//   console.log(arr);
// for (const i of arr.entries()){
//     console.log(i);
// }
for (const [i,val] of arr.entries()){
    console.log(`${i+1}: ${val}`);
}
