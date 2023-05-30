window.onload = function () {
    let elem = document.querySelector("#elem");

    elem.addEventListener("click", function () {
       setInterval(
          function () {
             this.value--;
          }.bind(elem),
          1000
       );
    });
 };