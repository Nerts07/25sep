function greeting(name) {
    console.log(`Hello, ${name}!`);
    
}
greeting('Gay');
greeting('Bi');


let planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

console.log(planets.splice(2, 1, 'hedgehogs'));



/*let names = ['Gay', 'pray'];

function alerts (){
    alert(names[0] + ' ' + names[1] + ' hellow');
}

alerts(); */

let names = ['Gay', 'pray'];

names.forEach(name => {
    console.log(name + ' hell yeah');
})

/*const cube = document.querySelectorAll('div');

cube.forEach(Square => {
    Square.addEventListener('click', Clicki)
})

function Clicki(){
    alert('Hi');
} */


const damn = document.querySelector('div')
damn.addEventListener('click', clickOutput)
    function clickOutput(){
        alert('Hi')
        
}


/*let username;
do {
    username = prompt('What is your name?');
}while (username === null || username === '');*/

/*for (let i = 0; i < 10; i++) {
    let planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
    console.log(planets);
}*/

    
    
let array = ["Lemons", "Gays", "Horny"];
array.unshift("Sony");
array.shift();
array.push("Nintendo");
array.pop();
console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}