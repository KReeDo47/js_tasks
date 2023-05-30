window.onload = function () {
// "use strict";

let elem = document.querySelector("#elem");
elem.addEventListener("blur", parent);

function parent() {
    console.log(this.value); // text

    function child() {
        console.log(this.value); // undefined
    }
    child();
}
};