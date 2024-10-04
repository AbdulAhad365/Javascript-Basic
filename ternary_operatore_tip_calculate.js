bill=[275,40,430]
function print_final_value(bill){
    //find the tip
    tip=[]
    x=0
    for (i=0;i<bill.length;i++){
        //use ternary operator
        x=bill[i]<=300 && bill[i]>=50 ? bill[i]*.15:bill[i]*.20;
        tip.push(x)
        // by if else 

        // if (bill[i]>=50 && bill[i]<=300){
        //     //tip is 10%
        //     tip.push(bill[i]*0.15)
        // }
        // // else tip is 20
        // else{
        //     tip.push(bill[i]*0.20)
        // }


    }
    for (i=0;i<tip.length;i++){
        console.log(`THE BILL WAS ${bill[i]}, tip was ${tip[i]}, and the total value is ${bill[i]+tip[i]}`);
        // console.log('THE BILL WAS '+bill[i]+' tip was '+tip[i]+ ' and the total value is '+(bill[i]+tip[i]));

    }
}
print_final_value(bill)