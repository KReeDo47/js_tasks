window.onload = function () {
    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(function (paragraph, index) {
       let paragraphNumber = index + 1;
       paragraph.textContent =
          paragraphNumber + ". " + paragraph.textContent;
    });
 }; 