window.onload = function () {
    let countdownInput = document.getElementById("elem");
    let countdownValue = parseInt(countdownInput.value);

    let timerId = setInterval(function () {
       countdownValue--;
       countdownInput.value = countdownValue;
       if (countdownValue === 0) {
          clearInterval(timerId);
       }
    }, 1000);
 };