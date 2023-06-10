window.onload = function () {
    let elem = document.querySelector("#elem");
    let toggle = document.querySelector("#toggle");
    let isHidden = false;

    toggle.addEventListener("click", function () {
       if (isHidden) {
          elem.classList.remove("hidden");
          toggle.value = "hide";
       } else {
          elem.classList.add("hidden");
          toggle.value = "show";
       }
       isHidden = !isHidden;
    });
 }; 