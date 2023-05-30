const links = document.querySelectorAll("a");

links.forEach((link) => {
link.addEventListener("click", (event) => {
    event.preventDefault();
    link.textContent += link.href;
});
});
//   2
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let result = document.getElementById("result");
let calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function (event) {
event.preventDefault();

let num1 = +input1.value;
let num2 = +input2.value;
let sum = num1 + num2;

result.textContent = sum;
});