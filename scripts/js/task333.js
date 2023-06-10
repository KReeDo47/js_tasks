window.onload = function () {
    let addRowBtn = document.getElementById("addRowBtn");
    let table = document.getElementById("myTable");

    addRowBtn.addEventListener("click", function () {
       let newRow = table.insertRow();
       for (let i = 0; i < 5; i++) {
          let cell = newRow.insertCell();
          cell.innerHTML = "";
       }
    });
    // 2
    let addBtn = document.getElementById("addBtn");
    let table1 = document.getElementById("table");

    addBtn.addEventListener("click", function () {
       // находим количество строк и колонок в таблице
       let rowCount = table1.rows.length;
       let colCount = table1.rows[0].cells.length;

       // добавляем новую ячейку в каждую строку
       for (let i = 0; i < rowCount; i++) {
          let cell = table1.rows[i].insertCell(colCount);
          cell.style.width = "50px";
          cell.style.height = "50px";
          cell.style.border = "1px solid black";
       }

       // добавляем новую строку
       let newRow = table1.insertRow(rowCount);
       for (let i = 0; i < colCount + 1; i++) {
          let cell = newRow.insertCell();
          cell.style.width = "50px";
          cell.style.height = "50px";
          cell.style.border = "1px solid black";
       }
    });
 }; 