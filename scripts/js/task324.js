window.onload = function () {
    const elem = document.getElementById("elem");
    elem.insertAdjacentHTML("beforebegin", "<p>!!!</p>");
    // 2
    let elem1 = document.getElementById("elem1");
    elem1.insertAdjacentHTML("afterend", "<p>!!!</p>");
    // 3
    var elem2 = document.getElementById("elem2");
    var newDiv = document.createElement("div");
    newDiv.className = "www";
    newDiv.innerHTML = "<p>text</p><p>text</p><input>";

    elem2.parentNode.insertBefore(newDiv, elem2);
 }; 