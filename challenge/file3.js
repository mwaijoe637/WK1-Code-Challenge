// Function to calculate Nssf
function totalNssf(grossSalary) {
    let nssf;
    // If gross salary is less than or equal to 7000, NSSF contribution is 6% of gross salary
    if (grossSalary <= 7000) {
        return nssf * 0.06; 
    } else {
        
        return 7000 * 0.06 + (pensionablePay - 7000) * 0.06; // Calculates NSSF contribution
    }
}

// Function to calculate NHIF contribution based on gross salary
function totalNhif(grossSalary) {
    // NHIF contribution 
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate taxable income
function taxableIncome(grossSalary, nssf, nhif) {
    return grossSalary - nssf - nhif; // Returns taxable income
}

// Function to calculate PAYE 
function paye(grossSalary) {
    // PAYE  rates 
    if (grossSalary <= 24000) {
        return grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        return grossSalary * 0.25;
    } else if (grossSalary > 32333) {
        return grossSalary * 0.30;     
    }
}

// Function to calculate net salary 
function netSalary(grossSalary, nssf, nhif) {
    let income = taxableIncome(grossSalary, nssf, nhif); // Calculate taxable income
    let tax = paye(grossSalary); // Calculate PAYE tax
    return income - tax; //  net salary after tax deductions
}

// Test case
let grossSalary = 30000;
let nssf = totalNssf(grossSalary);
let nhif = totalNhif(grossSalary);
let salaryAfterTax = netSalary(grossSalary, nssf, nhif);
console.log("Net Salary:", salaryAfterTax); //Net salary 