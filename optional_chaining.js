//resturent variable here
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (a,b) {
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
// now optional_chaning here
const days=['mon','tue','wed','thu','fri','sat','sun']
for (const i of days){
    const store=restaurant.openingHours[i]?.open??"closed";
    console.log(`On ${i} we open at ${store}`);
}
//functions in the optional chaining
console.log(restaurant?.order?.(34,41) ??'not defined')
console.log();
