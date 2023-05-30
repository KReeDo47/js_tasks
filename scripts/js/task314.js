window.onload = function () {
    let elem = document.querySelector("#elem");

    elem.addEventListener("click", function () {
       setInterval(function () {
          elem.value = Number(elem.value) + 1;
       }, 1000);
    });
 };
 // 2
 let elem = document.querySelector("#elem");

 elem.addEventListener("click", () => {
    setInterval(() => {
       elem.value = Number(elem.value) + 1;
    }, 1000);
 });