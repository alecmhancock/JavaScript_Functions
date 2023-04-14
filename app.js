console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){

    for(var i = 0; i < count; i++){
        if(i % 2 != 0){
            return (i)
        }
        else{
            continue;
        }
    }
    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
let nullParam = "One or more parameters not provided, please try again."    
let aboveSixteen = `Congrats, ${userName}, you can drive!`
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
if (userName == null || age == null){
    return nullParam
}
else if (age > 16){
    return belowSixteen
}
else{
    return aboveSixteen
}
}


// Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");
function quadrantCheck(x, y){
    if (x , y == 0){
        return ("The point lies on the center.")
    }
    else if( x = 0 && y != 0){
        return ("The point lies on the x axis.")
    }
    else if( y = 0 && x != 0){
        return ("The point lies on the y axis.")
    }
    else if(x > 0 && y > 0){
        return ("The point lies in quadrant 1.")
    }
    else if( x > 0 && y < 0){
        return ("The point lies in quadrant 4.")
    }
    else if(x < 0 && y > 0){
        return ("The point lies in quadrant 2.")
    }
    else if(x < 0 && y < 0){
        return ("The point lies in quadrant 3.")
    }
}



// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");


function triangleType(side1, side2, side3){
    if (side1 = side2 = side3){
        return ("This is an equilateral triangle.")
    }
    if (side1 + side2 == side3 || side1+ side3 == side2 || side3 + side2 == side1){
        if(side1 != side2 != side3){
            return ("This is a scalene triangle.")
        }
        if(side1 == side2 || side1 == side3 || side2 == side3){
            return ("This is an isoceles triangle.")
        }
    }
    else{
        return ("This is not a triangle.")
    }

}



// Exercise 5 Section
console.log("EXERCISE 2:\n==========\n");
function dataPlan(planLimit, day, usage){
    var dayTrack = 30 - day;
    var utilization = planLimit - usage;
    var avgUse = (planLimit / 30).toFixed(2);
    var actualUse =  (usage / day).toFixed(2);
    var expectedUse = (actualUse * 30).toFixed(2);
    var remaining = (utilization / dayTrack).toFixed(2);
    console.log(`${day} days utilized, ${dayTrack} days remaining. 
    Average daily use: ${avgUse} GB/day.`)
    if (avgUse > actualUse){
        return (`You are under your average daily use, 
        using ${actualUse} GB/day. At the current rate, 
        you will use ${expectedUse} GB of your ${planLimit} GB plan. 
        You can use up to ${remaining} 
        GB/day and remain within your limits.`)
    }
    if(avgUse < actualUse){
        return (`You are exceeding your average daily use, 
        using ${actualUse} GB/day. At the current rate, 
        you will use ${expectedUse} GB of your ${planLimit} GB plan. 
        You can use up to ${remaining} 
        GB/day and remain within your limits.`)
    }
    if(avgUse = actualUse){
        return (`You are within your average daily use, 
        using ${actualUse} GB/day. At the current rate, 
        you will use ${expectedUse} GB of your ${planLimit} GB plan. 
        You can use up to ${remaining} 
        GB/day and remain within your limits.`)
    }
}