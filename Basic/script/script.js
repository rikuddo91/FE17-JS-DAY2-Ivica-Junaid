/* -------------------ex 1 | Temperature v1.0------------------------*/

// Math.floor(Math.random() * (max + min) - min)
let temp = Math.floor(Math.random() * (26 + 5) - 5)

if(temp<11){
    console.log(`Temperature: ${temp}. The weather is cold`)
}
else {
    console.log(`Temperature: ${temp}. The weather is moderate`); 
}


/* -------------------ex 2 | Random Food------------------------*/

const favoriteFood = ['burger', 'banana', 'baked cake', 'broccoli']

function randomFood(){

    const random = favoriteFood[Math.floor(Math.random() * favoriteFood.length)];
    console.log(random)
}
randomFood();


/* -------------------ex 3 | Crystal Gazer------------------------*/

function crystalGlazer(){
    let job = prompt("Enter job title: ");
    let location = prompt("Enter location: ");
    let partner = prompt("Enter job partner's name: ");
    let children = prompt("Enter number of children: ");
    console.log(`You will be a ${job} in ${location} and married to ${partner} with ${children} children.`)
}
crystalGlazer();

/* -------------------ex 4 | Age Calculator------------------------*/

function ageCalculator(){
    let current_year = prompt("Enter current year ");
    let birth_year = prompt("Enter your birth year ");
    var age = current_year - birth_year;
    var lower_age = age - 1;
    console.log(`You are either ${age} or ${lower_age}`)
}
ageCalculator();

/* -------------------ex 5 | Age Calculator-improved------------------------*/

function ageCalculator(){
    let current_year = new Date().getFullYear();
    let birth_year = prompt("Enter your birth year ");
    var age = current_year - birth_year;
    var lower_age = age - 1;
    console.log(`You are either ${age} or ${lower_age}`)
}
ageCalculator();

/* ----------------ex 6 | Degree-Radian Conversion-------------------*/

function degRadian(){
    let degrees = prompt("Enter value in degrees ");
    const pi = Math.PI; // BEWARE of small and capital Math.pi =/= Math.PI
    var radians = degrees * (pi / 180);
    console.log(`${radians} radians`);
}
degRadian();

/* ----------------ex 7 | Area and Volume of a box-------------------*/



function getBox (width, height, depth){
    let area = width*height ;
    let volume = width*height*depth ;

    return `The area of the box is: ${area}
    The volume of the box is: ${volume}`;
}
console.log(getBox (2,7,5));