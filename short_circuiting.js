'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (a, b) {
    return [this.starterMenu[a], this.mainMenu[b]];
  },return_timing:function(){
    return this.openingHours.fri
  },

  delivery:function(obj){
    console.log(obj);
    console.log(`ORDER RECIEVED at time ${obj.time}, the dishes are ${this.starterMenu[obj.starterindex]} & ${this.mainMenu[obj.starterindex]} and the address is ${obj.address}`);
  }
  ,
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
console.log(3||"ahad");
console.log(""||0||undefined);

//resturent 1
const res1={
    name:"chilli",
    guest:0,
}
//resturent 2
const res2={
    name:"hasmi",
    owner:"ahad",
}

//use or selecting value
restaurant.or=0
const store=restaurant.or||10;
console.log(store);//use case
// res1.guest=res1.guest||32;
// res2.guest=res2.guest||32;

//flaw
restaurant.or=0
const val=restaurant.or||10;
console.log(val);//use case
// console.log("res1  "+res1.guest);
// console.log("res2 "+res2.guest);

//soluion use knowloege colascing operator
const new_value=restaurant.or || 42// use case
res1.guest=res1.guest??32;
res2.guest=res2.guest??32;
// valued that was declared in res1.guest=0 and it remains 0f
console.log("res1 "+res1.guest);
console.log("res2 "+res2.guest);
