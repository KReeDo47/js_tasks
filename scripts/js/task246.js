let button1 = document.querySelector('#button1');
button1.addEventListener('dblclick', function(){
    console.log('Hello!');
});

let button2 = document.querySelector('#button2');
button2.addEventListener('mouseover', function(){
    console.log('It is mouseover!');
});

let button3 = document.querySelector('#button3');
button3.addEventListener('mouseout', function(){
    console.log('It is mouseout!');
});

let button4 = document.querySelector('#button4');
button4.addEventListener('mouseover', function(){
    console.log('Mouseover!');
});
button4.addEventListener('mouseout', function(){
    console.log('Mouseout!');
});
