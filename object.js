const mysym = Symbol("key1");
const user = {
    name: "Abdul Ahad",
    "full name": "Abdul Ahad",
    age: 20,
    [mysym]: "key2",
    address: {
        city: "Karachi",
        country: "Pakistan"
    },
    email: "amir.raza537918@gmail.com",
    is_logged_in: true,
};
// console.log(typeof(user[mysym]));
user.age = 21;
// to freeze the object
// Object.freeze(user);
user.age = 22;
user.say_hello=function(){
    console.log(`hello brother ${this.name}`);
}
user.say_hello();
console.log(user);