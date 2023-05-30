window.onload = function () {
let parent = document.querySelector("#elem");
let li = document.createElement("li");
li.textContent = "item";
parent.appendChild(li);
// 2
const button = document.getElementById("button");
const list = document.getElementById("elem1");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "item";
    list.appendChild(li);
});
};