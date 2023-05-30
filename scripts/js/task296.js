window.onload = function () {
let div = document.querySelector("div");

div.addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        console.log("Клик произошел на div");
    } else if (event.target.tagName === "UL") {
        console.log("Клик произошел на ul");
    } else if (event.target.tagName === "LI") {
        console.log("Клик произошел на li");
    }
});
// 2
let container = document.querySelector("#container");

container.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.innerHTML += "!";
    } else if (event.target.tagName === "UL") {
        let newLi = document.createElement("li");
        newLi.innerHTML = "New item";
        event.target.appendChild(newLi);
    }
});
};