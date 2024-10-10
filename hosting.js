// functions defined outside the function or the variable.
// basically calling or printing the variable before initialization

//invalid
// console.log(x);
// will print the undefined
'use strict'
// console.log(y);
let x=4
var y=4



//functions
//will give 5 result
console.log(add(1,4))

function add(a,b){
    return a+b;
}

// dont work for function stored in const,let but yes for var->undefined
//not work for arrow function as well...