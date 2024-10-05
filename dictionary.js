const ahad={
    first_name:"ahad",
    last_name:"amir",
    license:true,
    profession:"billionare",
    birth_year:2004
    ,
    print_in_one_statement:function(){
        if (this.license){
        this.age_by_this_key();
        console.log(this.first_name+" is a "+this.age_of_ahad+" old "+this.profession+", and he has a licencse")}
        else{
            console.log(this.first_name+" is a "+this.age_of_ahad+" old "+this.profession+", and he has no licencse")
        }
        },age_by_this_key:function () {
        //this will add age of ahad in the object of ahad 
        this.age_of_ahad=2024-this.birth_year;
        return this.age_by_this_key;
    },
    age:function(year){
        
        return 2024-year;}
}
//both doing same thing
console.log(ahad.age(2004))
console.log(ahad["age"](2004))

// by this key word which referes to the object of ahad
console.log(ahad.age_by_this_key())


console.log(ahad.age_of_ahad)
// //TO PRINT ALL THE STATEMENT
ahad.print_in_one_statement()
console.log("getting batch")