window.onload = function () {
    const button = document.getElementById("my-button");
    const table = document.getElementById("my-table");

    button.addEventListener("click", function () {
       const cells = table.getElementsByTagName("td");

       for (let i = 0; i < cells.length; i++) {
          const cell = cells[i];
          const number = parseInt(cell.innerHTML);
          if (!isNaN(number)) {
             cell.innerHTML = number * 2;
          }
       }
    });
 }; 