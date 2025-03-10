// DOM Document Object Model

// SELECTORS IN JAVA SCRIPT

// document.querySelector('h1').style.color = 'red';
// document.getElementById('my-form').style.background = '#f4f4f4';
// document.querySelectorAll('.item').style.color = 'red';
// document.getElementsByClassName('.item').style.color = 'red';
// document.getElementsByTagName('li').style.color = 'red';

// EXAMPLE
let preciousContiner = document.querySelector('#precious');
let EmmaBox1 = document.querySelector('#box1');
let hi = document.querySelectorAll('.hi');
const secondHi = document.getElementsByTagName('div');

// EventListeners in Javascript
// examples of Event listeners

/*
    1. Click Event
    2. Dblclick Event
    3. Mouseover Event
    4. Mouseenter Event
    5. Mouseleave Event
    6. Load Event
    7. Change Event
    8. Scroll Event
    9. Mousemove Event
    10. input Event
    11. focus Event
*/

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');

//DOUBLE CLICK EVENT
box1.addEventListener('dblclick', function(){
    alert('Favour is learning how to use Event Listeners in Javascript');
});

// CLICK EVENT
function AddAlert(){
    alert('Hello World');
}

setInterval(() => {
    AddAlert();
}, 6000);

box2.addEventListener('click', function(){
    box1.style.width = '80%';
    box2.style.height = '10%';
    box2.style.background = 'green';
    box3.style.width = '60%';
});
// box1.addEventListener('click', function(){
// alert('Favour is learning Javascript');
// });

// MOUSE-ENTER EVENT
box3.addEventListener('mouseenter', function(){
    box3.style.background = 'red';
    box3.style.width = '80%';
    box3.style.height = '10%';
});

// MOUSE-LEAVE EVENT
box3.addEventListener('mouseleave', function(){
    box3.style.backgroundColor = 'fuchsia';
})
