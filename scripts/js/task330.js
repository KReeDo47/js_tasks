window.onload = function () {
    var table = document.getElementById("myTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    var counter = 1;
    for (var i = 0; i < 5; i++) {
       var tr = document.createElement("tr");
       for (var j = 0; j < 5; j++) {
          var td = document.createElement("td");
          td.innerHTML = counter++;
          tr.appendChild(td);
       }
       tbody.appendChild(tr);
    }
 }; 