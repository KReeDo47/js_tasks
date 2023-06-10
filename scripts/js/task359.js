window.onload = function () {
    (function (selector1, selector2, selector3, selector4) {
       let input1 = document.querySelector(selector1);
       let input2 = document.querySelector(selector2);
       let input3 = document.querySelector(selector3);
       let button = document.querySelector(selector4);

       button.addEventListener("click", function () {
          let sum =
             Number(input1.value) +
             Number(input2.value) +
             Number(input3.value);
          console.log(sum);
       });
    })("#input1", "#input2", "#input3", "#button");
 }; 