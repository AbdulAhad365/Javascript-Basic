// to make a object literal
//by using object literal we can create a object with properties and methods

//how to use symbols
const sym=Symbol("key1");
const user_information={
    name:"abdul ahad",
    age:20,
    sym:"ahad"
    
    ,
    location:"pakistan",
    email:"mailme@gmail.com",
    is_login:true
}

console.log(user_information["name"]);
console.log(user_information.is_login);
console.log(user_information[sym]);
console.log(sym);