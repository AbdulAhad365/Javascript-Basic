//now making the singleton object
//  const tinder=new Object()

// non singolton object
const tinder={company:{AA_organization:{employees:{
    emp1:{name:"Abdul Ahad",age:20},
}}}}
tinder.id=1234
 console.log(tinder.company?.AA_organization?.employees?.emp1?.name);

 //  combine two arrays
 const obj1={
    name:"ali",
    age:50 
 }
 const obj2={
    full_name:"abdul ahad",
    age:34
 }
 console.log(obj1);
 console.log(obj2);
 // if both obj1 and obj2 has same parameter then the 
//  value of obj2 will overwrite the value of obj1
  const obj3=Object.assign({},obj1,obj2);
 console.log("The object3 is ",obj3);