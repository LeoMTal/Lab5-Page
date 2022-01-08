let cloud_background = document.getElementById('cloud-background');
let clouds = document.getElementById('clouds');
let moon = document.getElementById('sun');
let background = document.getElementById('background');
let airbaloon = document.getElementById('airbaloon');
let mountain_behind = document.getElementById('mountain-behind');
let trees = document.getElementById('trees');
let mountain_front = document.getElementById('mountain-front');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    cloud_background.style.top = value * 0 + 'px';
    clouds.style.top = value * 0.5 + 'px';
    sun.style.top = value * .3 + 'px' ;
    airbaloon.style.left= value * .2 + 'px' ;
    background.style.top = value * .5 + 'px';
    mountain_behind.style.top = value * .35 + 'px';

    trees.style.top = value * .1 + 'px';
    mountain_front.style.top = value * .05 + 'px';
    
})
