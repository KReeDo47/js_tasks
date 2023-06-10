window.onload = function () {
    let buttons = document.querySelectorAll("button");
    for (let button of buttons) {
       button.addEventListener("click", function () {
          let elem = document.querySelector("#" + this.dataset.elem);
          elem.classList.toggle("hidden");
       });
    }
    // 2
    let buttons1 = document.querySelectorAll("button");
    let elems = document.querySelectorAll("p");

    for (let i = 0; i < buttons1.length; i++) {
       buttons1[i].addEventListener("click", function () {
          elems[i].classList.toggle("hidden");
       });
    }
    let buttons2 = document.querySelectorAll("button");

    for (let button of buttons2) {
       button.addEventListener("click", function () {
          this.previousElementSibling.classList.toggle("hidden");
       });
    }
 }; 