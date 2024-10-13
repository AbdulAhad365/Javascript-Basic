'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const store = restaurant.location;
let [first, , , second] = restaurant.categories;

console.log(first, second); // Italian Organic
[first, second] = [second, first];
console.log(first, second); // Organic Italian
console.log(restaurant.order(1, 2));

// Destructuring method 
const { categories, openingHours } = restaurant;
console.log(categories, openingHours);

// Changing the names
const { categories: c, openingHours: o } = restaurant;
console.log(c, o);

// Mutating variables
let a1 = 3;
let b1 = 5;

// Corrected object assignment
const obj1 = { a1: 23, b1: 322, c1: 32 }; // Correct way to initialize obj1
({ a1, b1 } = obj1); // Destructuring to assign new values
console.log(a1, b1); // 23 322

// opening timing return
console.log(restaurant.return_timing()); //way 2 to solve it
const {fri:{open,close}}=openingHours
//        --------------    or
const {fri}=openingHours
console.log(fri,open,close);

//how to do do destructing directly in using the functions
const obj={
  time:"22:10",
  address:"uk",
  mainindex:2,
  starterindex:1
}
restaurant.delivery(obj)
