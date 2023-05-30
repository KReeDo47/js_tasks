window.onload = function () {
    const button = document.querySelector("#btn");
    const text = document.querySelector("#text");

    button.addEventListener("click", () => {
       setInterval(() => {
          const currentValue = parseInt(text.textContent);
          text.textContent = currentValue + 1;
       }, 1000);
    });
    // 2
    const button1 = document.querySelector("#btn");
    const text1 = document.querySelector("#text");
    let timerId;

    button1.addEventListener("click", () => {
       timerId = setInterval(() => {
          const currentValue = parseInt(text1.textContent);
          if (currentValue === 0) {
             clearInterval(timerId);
          } else {
             text1.textContent = currentValue - 1;
          }
       }, 1000);
    });
    // 3
    const input = document.querySelector("#input");

    setInterval(() => {
       const currentValue = parseInt(input.value);
       const squareValue = currentValue * currentValue;
       input.value = squareValue;
    }, 1000);
    // 4
    const input1 = document.querySelector("#input");
    const timer = document.querySelector("#timer");

    input.addEventListener("blur", () => {
       let count = parseInt(input1.value);
       timer.textContent = count;

       const intervalId = setInterval(() => {
          count--;
          timer.textContent = count;

          if (count === 0) {
             clearInterval(intervalId);
          }
       }, 1000);
    });
    // 5
    const input2 = document.getElementById("input");
    const button2 = document.getElementById("button");
    const countdown = document.getElementById("countdown");

    button2.addEventListener("click", function () {
       const num = input2.value;
       countdown.textContent = num;
       let interval = setInterval(function () {
          num--;
          countdown.textContent = num;
          if (num <= 0) {
             clearInterval(interval);
          }
       }, 1000);
    });
 };