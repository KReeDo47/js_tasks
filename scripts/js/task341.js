window.onload = function () {
    let paragraphs = document.querySelectorAll("#parent p");

    for (let i = 0; i < paragraphs.length; i++) {
       let deleteLink = document.createElement("a");
       deleteLink.href = "#";
       deleteLink.textContent = "delete";

       deleteLink.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.parentNode.removeChild(this.parentNode);
       });

       paragraphs[i].appendChild(deleteLink);
    }
    let spans = document.querySelectorAll("#parent span");

    for (let i = 0; i < spans.length; i++) {
       spans[i].addEventListener("click", function () {
          let input = document.createElement("input");
          input.type = "text";
          input.value = this.textContent;

          input.addEventListener("blur", function () {
             this.parentNode.removeChild(this);
             let span = document.createElement("span");
             span.textContent = this.value;
             this.parentNode.insertBefore(span, this);
          });

          this.parentNode.insertBefore(input, this);
       });
    }
 }; 