let dolphin=[96,108,89];
let koalas=[88,91,110];
function find_avg(d,k){
    dolphin_Avg=0;
    koalas_avg=0;
    
    for (i=0;i<d.length;i++){
        dolphin_Avg+=d[i];
    }
    for (i=0;i<k.length;i++){
        koalas_avg+=k[i];
    }
    if (d>k){
        console.log("DOLPHIN, avg is more")
    }
    else if(d===k){
        console.log("ITS A TIE")
    }
    else{
        console.log("KOALAS, avg is more")
    }
    
    console.log("The value of avg dolphin is "+dolphin_Avg/d.length);
    console.log("The value of avg koalas is "+koalas_avg/k.length);

}
find_avg(dolphin,koalas)