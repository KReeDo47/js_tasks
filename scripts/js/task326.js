window.onload = function () {
    var elem = document.querySelector("#elem");
    if (elem.matches(".www")) {
       console.log('Элемент с классом "www" найден');
    } else {
       console.log('Элемент не содержит класс "www"');
    }
    // 2
    var elem = document.querySelector("#elem");
    if (elem.matches("p")) {
       console.log("Элемент является абзацем");
    } else {
       console.log("Элемент не является абзацем");
    }
    // 3
    let elem1 = document.querySelector("#elem1");
    let elem2 = document.querySelector("#elem2");

    if (elem1.contains(elem2)) {
       console.log("Элемент elem2 является потомком элемента elem1");
    } else {
       console.log("Элемент elem2 не является потомком элемента elem1");
    }
 }; 