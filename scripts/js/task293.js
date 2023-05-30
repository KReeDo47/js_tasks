let elem = document.getElementById("elem");

elem.addEventListener("click", function (event) {
if (event.altKey) {
elem.style.backgroundColor = "red";
}
});

let elem1 = document.querySelector("#elem");
elem1.addEventListener("click", function (event1) {
if (event1.target.tagName === "LI") {
if (event1.ctrlKey) {
    event1.target.textContent += "1";
} else if (event1.shiftKey) {
    event1.target.textContent += "2";
}
}
});