ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2500,
    delay: 100,
});

ScrollReveal().reveal('.name', {delay: 200, origin: 'top'});
ScrollReveal().reveal('.social_icons', {delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.scrolldown', {delay: 1300});
ScrollReveal().reveal('.js-lst', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.html-lst', {delay: 50, origin: 'left'});
ScrollReveal().reveal('.css-lst', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.aws-lst', {delay: 150, origin: 'left'});
ScrollReveal().reveal('.java-lst', {delay: 200, origin: 'left'});
ScrollReveal().reveal('.flutter-lst', {delay: 250, origin: 'left'});
ScrollReveal().reveal('.autodesk-lst', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.text_box', {delay: 350, origin: 'bottom'});

// const text = baffle(".data");
//       text.set({
//             characters : '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
//             speed: 120
//       });
//       text.start();
//       text.reveal(4000);

let section = document.querySelector(".transition");
let text = document.querySelector('.outer-text');
let innerText = document.querySelector('.inner-text');
window.addEventListener('scroll', function(){
    let value = window.scrollY-1300;
    text.style.left = 100-value/5+'%';
    innerText.style.left = 100-value/5+'%';
})

let fanua1 = document.querySelector('.fanua1');
let fanua2 = document.querySelector('.fanua2');
let fanua3 = document.querySelector('.fanua3');
let fanua4 = document.querySelector('.fanua4');
window.addEventListener('scroll', function(){
    let value = window.scrollY-2000;
    fanua1.style.top = 100-value/5+'%';
    fanua2.style.top = 100-value/6+'%';
    fanua3.style.top = 100-value/4+'%';
    fanua4.style.top = 100-value/4.6+'%';
})

let inspeech1 = document.querySelector('.inspeech1');
let inspeech2 = document.querySelector('.inspeech2');
let inspeech3 = document.querySelector('.inspeech3');
let inspeech4 = document.querySelector('.inspeech4');
window.addEventListener('scroll', function(){
    let value = window.scrollY-4300;
    inspeech1.style.top = 100-value/5+'%';
    inspeech2.style.top = 100-value/6+'%';
    inspeech3.style.top = 100-value/4+'%';
    inspeech4.style.top = 100-value/4.6+'%';
})

let rememory1 = document.querySelector('.rememory1');
let rememory2 = document.querySelector('.rememory2');
let rememory3 = document.querySelector('.rememory3');
let rememory4 = document.querySelector('.rememory4');
window.addEventListener('scroll', function(){
    let value = window.scrollY-6600;
    rememory1.style.top = 100-value/5+'%';
    rememory2.style.top = 100-value/6+'%';
    rememory3.style.top = 100-value/4+'%';
    rememory4.style.top = 100-value/4.6+'%';
})

const controller = new ScrollMagic.Controller();

const sceneOne = new ScrollMagic.Scene({
    triggerElement: ".fanua",
    duration: 1500,
    triggerHook: 0,
}).setPin('.fanua');

const sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".inspeech",
    duration: 1500,
    triggerHook: 0,
}).setPin('.inspeech');

const sceneThree = new ScrollMagic.Scene({
    triggerElement: ".rememory",
    duration: 1500,
    triggerHook: 0,
}).setPin('.rememory');

controller.addScene([
    sceneOne,
    sceneTwo,
    sceneThree
]);





// let listItems = [...document.querySelectorAll('li')];

// let options ={
//     rootMargin: '-10%',
//     threshold: 0.0,
// }

// let observer = new IntersectionObserver(showItem, options);

// function showItem(entries){
//     entries.forEach(entry =>{
//         if (entry.isIntersecting){
//             entry.target.children[0].classList.add('active');
//         }
//     })
// }

// listItems.forEach(item =>{
//     observer.observe(item);

// })

/*
document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;
        
        move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
    });
}
*/