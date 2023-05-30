window.onload = function () {
    "use strict";

    let elem = document.querySelector("#elem");
    elem.addEventListener("blur", func);

    function func() {
       alert(square.call(this));

       function square() {
          return this.value * this.value;
       }
    }
 };