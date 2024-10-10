console.log(this)

//function has its disc key word 
// but the arrow function uses the lexaical keyword

//for the dictionary
const ahad={
    year:2004,
    class_age:function(){
        console.log(2024-this.year);
    }
}
ahad.class_age();