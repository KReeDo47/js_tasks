function startCountdown() {
    let count = 100;
    let countdown = setInterval(function () {
       console.log(count);
       count--;
       if (count === 0) {
          clearInterval(countdown);
       }
    }, 1000);
 }
 // 2
 let timerId;
 const countdownBtn = document.getElementById("countdownBtn");

 function startCountdown() {
    let counter = 100;
    timerId = setInterval(() => {
       console.log(counter);
       counter--;
       if (counter < 0) {
          clearInterval(timerId);
       }
    }, 1000);
 }

 countdownBtn.addEventListener("click", () => {
    if (!timerId) {
       startCountdown();
    }
 });