let elem = document.querySelector("input");
elem.addEventListener("keypress", function (event) {
console.log(event.code);
});


let input = document.querySelector("#myInput");
let paragraph = document.querySelector("#myParagraph");

input.addEventListener("keyup", function (event) {
if (event.keyCode === 13) {
    paragraph.textContent = input.value;
    input.value = "";
}
});