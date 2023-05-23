console.log("====================== 1 ========================");

let elem = document.getElementById('elem');
elem.textContent = 'text'

console.log("====================== 2 ========================");

let elems = document.getElementsByTagName('li');

for (let elem of elems) {
    elem.textContent += '!'
}

console.log("====================== 2 ========================");
let elems2 = document.getElementsByClassName('www');

for (let elem of elems2) {
    elem.innerHTML = '!!!';
}