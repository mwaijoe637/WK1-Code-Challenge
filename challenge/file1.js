//final grade function
function finalscore(average) {
    
    let grade;

   //The grade is given in relation to the average
    if (average > 79) {
        grade = 'A';
    } else if (average >= 60 && average <= 79) {
        grade = 'B';
    } else if (average >= 49 && average <= 59) {
        grade = 'C';
    } else if (average >= 40 && average <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    
    return grade;// grade
}