window.onload = function () {
    var arr = ["Элемент 1", "Элемент 2", "Элемент 3"];
    var ul = document.getElementById("elem");
    for (var i = 0; i < arr.length; i++) {
       var li = document.createElement("li");
       li.innerHTML = arr[i];
       ul.appendChild(li);
    }
 }; 