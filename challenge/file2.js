
function checkSpeed(speed) {//function to examine speed
    
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
    let verdict; 

    
    if (speed <= speedLimit) {
        verdict = "Ok"; //If limit is maintained
    } else {
        
        const demeritPoints = Math.ceil((speed - speedLimit) / kmPerDemeritPoint);
        
        
        if (demeritPoints >= maxDemeritPoints) {
            verdict = "License suspended"; 
        } else {
            
            verdict = "Points: " + demeritPoints;
        }
    }

    return verdict; //result
}

// Tests
console.log(checkSpeed(80)); // Output: Points: 2
console.log(checkSpeed(65)); // Output: Ok
console.log(checkSpeed(150)); // Output: License suspended