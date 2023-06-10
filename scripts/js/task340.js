window.onload = function () {
    let list = document.querySelector("#list");

    list.addEventListener("click", function (event) {
       let target = event.target;

       if (target.tagName === "LI") {
          let input = document.createElement("input");
          input.value = target.textContent;

          input.addEventListener("blur", function () {
             target.textContent = this.value;
             this.parentNode.removeChild(this);
          });

          target.textContent = "";
          target.appendChild(input);
          input.focus();
       }
    });
 }; 