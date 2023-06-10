window.onload = function () {
    function appendText(elem, text) {
       elem.textContent += text;
    }

    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(function (paragraph) {
       appendText(paragraph, "!");
    });
    // 2
    function setValue(input, text) {
       input.value = text;
    }
 }; 