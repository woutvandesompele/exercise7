import Ball  from './classes/Ball.js';
import { random } from './functions/lib.js';

const $canvas = document.querySelector('.canvas');
const b = [];
const ctx = $canvas.getContext("2d");
//const b = new Ball($canvas, random(0,$canvas.width), random(0, $canvas.height), `white`);

const animate = () => {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    b.forEach(b => b.draw());
    requestAnimationFrame(animate);
}

const init = () => {
    for (let i = 0; i < 50; i++){
        b.push(new Ball($canvas, random(0, $canvas.width), random(0, $canvas.height), `rgb(${random(255, 255)}, ${random(255, 255)}, ${random(0, 255)})`));
    }

    animate();

    // for (let i = 10; i < 800; i += 20)
    //     const circle = new Ball($canvas .......)
    //     circle.draw();
}

init();