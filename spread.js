'use strict'
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };
const arr=[1,2,3]
const on=[23,4,...arr]
console.log(...restaurant.starterMenu);
// print day = friday
const {thu,...rest}=restaurant.openingHours;
console.log(thu);
console.log(rest);
let sum=0
//make a function to add any quantity of the number and sum them
const add=function(...number){
  for (let i=0;i<number.length;i++){
    sum+=number[i]
    console.log(sum);
  }
}
add(2,3,5,6)

// or passing array to spread
const st=([3,4,52,1,5,5,1,12,57])
add(...st)