/* -------------------Exercise #1 ------------------------*/


let temp = Math.floor(Math.random() * (26 + 5) - 5)

if(temp<11){
    console.log(`Temperature: ${temp}. The weather is cold`)
}
else {
    console.log(`Temperature: ${temp}. The weather is moderate`); 
}


/* -------------------Exercise #2 ------------------------*/

const favoriteFood = ['burger', 'banana', 'baked cake', 'broccoli']

function randomFood(){

    const random = favoriteFood[Math.floor(Math.random() * favoriteFood.length)];
    console.log(random)
}
randomFood();


/* -------------------Exercise #3 ------------------------*/