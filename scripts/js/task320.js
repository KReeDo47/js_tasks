window.onload = function () {
const ul = document.getElementById("list");
for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
}
};