window.onload = function () {
    var table = document.getElementById("myTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    for (var i = 0; i < 5; i++) {
       var tr = document.createElement("tr");
       for (var j = 0; j < 5; j++) {
          var td = document.createElement("td");
          td.innerHTML = "Ряд " + (i + 1) + ", колонка " + (j + 1);
          tr.appendChild(td);
       }
       tbody.appendChild(tr);
    }
 }; 