window.onload = function () {
    function cloneInput() {
       var input = document.getElementById("input-field");
       var clonedInput = input.cloneNode(true);
       input.parentNode.insertBefore(clonedInput, input.nextSibling);
    }
 }; 