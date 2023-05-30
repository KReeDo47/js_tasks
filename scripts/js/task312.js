const startButton = document.querySelector("#start-button");
         const stopButton = document.querySelector("#stop-button");
         const output = document.querySelector("#output");
         let count = 100;
         let timerId;

         function countdown() {
            count--;
            output.textContent = count;

            if (count === 0) {
               clearInterval(timerId);
            }
         }
         startButton.addEventListener("click", function () {
            timerId = setInterval(countdown, 1000);
         });

         stopButton.addEventListener("click", function () {
            if (timerId) {
               clearInterval(timerId);
            }
         });
         setInterval(function () {
            if (count === 0) {
               clearInterval(timerId);
            }
         }, 1000);
         // 2
         let start = document.querySelector("#start");
         let stop = document.querySelector("#stop");
         let timerId1;

         start.addEventListener("click", function () {
            timerId1 = setInterval(function () {
               let date = new Date();
               console.log(date.getMinutes() + " " + date.getSeconds());
            }, 1000);
         });
         stop.addEventListener("click", function () {
            clearInterval(timerId);
         });