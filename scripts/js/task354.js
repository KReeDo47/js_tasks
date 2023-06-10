window.onload = function () {
    function createTable(rows, cols, parent) {
       let table = document.createElement("table");

       for (let i = 0; i < rows; i++) {
          let row = document.createElement("tr");
          for (let j = 0; j < cols; j++) {
             let cell = document.createElement("td");
             cell.textContent = `${i + 1}.${j + 1}`;
             row.appendChild(cell);
          }
          table.appendChild(row);
       }

       parent.appendChild(table);
    }
    let parent = document.body;
    createTable(3, 4, parent);
 }; 