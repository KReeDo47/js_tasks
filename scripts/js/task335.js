window.onload = function () {
    let parent = document.getElementById("parent");
    let button = document.getElementById("button");

    button.addEventListener("click", function () {
       let li = document.createElement("li");
       li.innerHTML = parent.children.length + 1;
       parent.appendChild(li);

       li.addEventListener("click", function () {
          parent.removeChild(this);
       });
    });

    for (let i = 0; i < parent.children.length; i++) {
       parent.children[i].addEventListener("click", function () {
          parent.removeChild(this);
       });
    }
 }; 