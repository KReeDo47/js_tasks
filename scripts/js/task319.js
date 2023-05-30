window.onload = function () {
const list = document.getElementById("myList");
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "item";
    list.appendChild(newItem);

    newItem.addEventListener("click", () => {
        newItem.textContent += "!";
    });
});
};