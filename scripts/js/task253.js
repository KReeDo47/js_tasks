// 1
document.querySelector('#image').src = 'favicon.ico';

// 2
/*
console.log(document.querySelector('#image2').src);
console.log(document.querySelector('#image2').width);
console.log(document.querySelector('#image2').height);

Ошибка состоит в том, что из-за поиска 
айди, браузер несколько раз выполняет одно и тоже действие несколько раз
*/

let img2 = document.querySelector('#image2');
img2.src = 'favicon.ico'
img2.height = '100'
img2.width = '200'