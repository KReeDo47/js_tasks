window.onload = function () {
    let pTags = document.getElementsByTagName("p");
    for (let i = 0; i < pTags.length; i++) {
       let link = document.createElement("a");
       link.href = "#";
       link.innerHTML = "Перечеркнуть";
       link.addEventListener("click", function () {
          pTags[i].style.textDecoration = "line-through";
          this.style.textDecoration = "none";
       });
       pTags[i].appendChild(link);
    }
    // 2
    const table = document.getElementById("myTable");

    table.addEventListener("click", function (event) {
       const target = event.target;
       if (target.tagName === "A") {
          const row = target.parentNode.parentNode;
          row.classList.add("green-bg");
       }
    });
 }; 