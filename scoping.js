'use strict'

const f_name="ahad"
function A(roll_no){
    const marks=54;
    console.log(f_name);
    B();
    if (marks>50){
        // check the marks
        const c=3;
        var d=5;
            // both the f_name ^ marks are in scope of square
        console.log(`${f_name} got ${marks} marks`);

        console.log(c);
    }
    function C(){
        console.log(d);
        }
    C()
    // return marks

}
A(3)
function B(){
    console.log("Caanot print it");

    // CANNOT BE ACCESSED BUT IS NOT IN THE SCOPE OF THE B
    // console.log(marks);

}