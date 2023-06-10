window.onload = function () {
    function appendText(elems, text) {
       for (let elem of elems) {
          elem.textContent = text;
       }
    }
    let elems = document.querySelectorAll(".elem");
    appendText(elems, "text");
 }; 