window.onload = function () {
    window.addEventListener("load", function () {
       setTimeout(function () {
          const message = document.getElementById("message");
          message.textContent = "Прошло 10 секунд!";
       }, 10000);
    });
    // 2
    function printNumber(n) {
       console.log(n);
       setTimeout(function () {
          printNumber(n + 1);
       }, n * 1000);
    }

    printNumber(0);
 };