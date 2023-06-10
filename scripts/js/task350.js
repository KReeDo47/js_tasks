window.onload = function () {
    function forEach(collection, callback) {
       for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
       }
    }

    let paragraphs = document.querySelectorAll("p");

    forEach(paragraphs, function (paragraph) {
       paragraph.textContent += "!";
    });
 }; 