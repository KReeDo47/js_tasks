window.onload = function () {
    const myDiv = document.getElementById("myDiv");
    const myParagraph = document.getElementById("myParagraph");

    for (let i = 0; i < 5; i++) {
       const input = document.createElement("input");
       input.addEventListener("blur", function () {
          myParagraph.textContent += this.value + " ";
       });
       myDiv.appendChild(input);
    }
 };