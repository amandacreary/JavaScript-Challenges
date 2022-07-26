const myAge = 30;
let earlyYears = 2;
earlyYears *= 10.5;
//Since we already accouonted for the first two years, take the myAge variable and subtract 2 from it
let laterYears = myAge - 2;
//multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. use the multiplication assignment operator to multiply and assign in one step

laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears

let myAgeInDogYears = earlyYears + laterYears

//write your name as a string, call its built in method .toLowerCase()

let myName ='Amanda Creary'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}years old in dog years.`)