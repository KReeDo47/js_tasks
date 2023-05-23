let p1 = document.querySelector('#elem1');
let p2 = document.querySelector('#elem2');
let p3 = document.querySelector('#elem3');
let p4 = document.querySelector('#elem4');
let p5 = document.querySelector('#elem5');

p1.addEventListener('click', func);
p2.addEventListener('click', func);
p3.addEventListener('click', func);
p4.addEventListener('click', func);
p5.addEventListener('click', func);

function func() {
    console.log("message");
}                                               