window.onload = function () {
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
elem1.addEventListener("click", function () {
    console.log("зеленый");
});
elem2.addEventListener("click", function (event) {
    console.log("голубой");
    event.stopPropagation();
});
elem3.addEventListener("click", function () {
    console.log("красный");
});
};