window.onload = function () {
    const list = document.getElementById("myList");
    const items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
       const deleteLink = document.createElement("a");
       deleteLink.href = "#";
       deleteLink.innerHTML = "Удалить";

       deleteLink.onclick = function () {
          list.removeChild(items[i]);
          return false;
       };

       items[i].appendChild(deleteLink);
    }
    // 2
    let table = document.getElementById("myTable");
    for (let i = 0; i < table.rows.length; i++) {
       let deleteCell = table.rows[i].insertCell(-1);
       deleteCell.innerHTML =
          '<button class="delete-btn">Delete</button>';
    }

    table.addEventListener("click", function (e) {
       if (e.target.classList.contains("delete-btn")) {
          let row = e.target.closest("tr");
          row.parentNode.removeChild(row);
       }
    });
 };
