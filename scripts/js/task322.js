window.onload = function () {
    let elems = document.querySelectorAll("li");

    for (let elem of elems) {
       elem.addEventListener("click", function () {
          elem.remove();
       });
    }
    // 2
    document
       .getElementById("button")
       .addEventListener("click", function () {
          var parent = document.getElementById("parent");
          var lastChild = parent.lastElementChild;
          if (lastChild) {
             parent.removeChild(lastChild);
          }
       });
 };