window.onload = function () {
    let elem = document.querySelector("#elem");
    let input = document.querySelector("#input");

    input.value = elem.textContent;

    input.addEventListener("input", function () {
       elem.textContent = this.value;
    });
    // 2
    let elem2 = document.querySelector("#elem1");

    elem2.addEventListener("click", function () {
       let input = document.createElement("input");
       input.value = elem2.textContent;

       input.addEventListener("blur", function () {
          elem2.textContent = this.value;
          this.remove(); // удалим инпут
       });

       elem2.parentElement.appendChild(input);
    });
 }; 