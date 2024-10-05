// console.log(rand)
let rand=0
while(rand!=6){
    rand=Math.trunc(Math.random()*7)
    console.log("The dice is "+rand)
    if (rand===6){
        console.log("-------I GOT 6------")
    }
}

