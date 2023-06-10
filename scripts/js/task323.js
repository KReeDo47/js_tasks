window.onload = function () {
    let elem = document.getElementById("elem");
    elem.insertAdjacentHTML("afterbegin", "<li>start</li>");
    elem.insertAdjacentHTML("beforeend", "<li>finish</li>");
    // 2
    var parent = document.getElementById("parent");
    var newElem = document.createElement("li");
    newElem.textContent = "new";
    parent.insertBefore(newElem, document.getElementById("elem1"));
 }; 