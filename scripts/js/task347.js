window.onload = function () {
    const array = ["item 1", "item 2", "item 3"];
    const list = document.getElementById("myList");

    for (let i = 0; i < array.length; i++) {
       const listItem = document.createElement("li");
       const text = document.createTextNode(array[i]);
       listItem.appendChild(text);
       list.appendChild(listItem);
    }
    //   2
    let employees = [
       { name: "employee1", age: 30, salary: 400 },
       { name: "employee2", age: 31, salary: 500 },
       { name: "employee3", age: 32, salary: 600 },
    ];

    let table =
       "<table><thead><tr><th>Name</th><th>Age</th><th>Salary</th></tr></thead><tbody>";

    for (let i = 0; i < employees.length; i++) {
       table +=
          "<tr><td>" +
          employees[i].name +
          "</td><td>" +
          employees[i].age +
          "</td><td>" +
          employees[i].salary +
          "</td></tr>";
    }

    table += "</tbody></table>";

    document.body.innerHTML = table;
    // 3
    let employees1 = [
       { name: "employee1", age: 30, salary: 400 },
       { name: "employee2", age: 31, salary: 500 },
       { name: "employee3", age: 32, salary: 600 },
    ];

    // получаем ссылку на родительский элемент
    let ul = document.querySelector("ul");

    // перебираем массив и создаем элементы списка
    for (let i = 0; i < employees1.length; i++) {
       let li = document.createElement("li");
       li.textContent =
          employees1[i].name +
          ", age: " +
          employees1[i].age +
          ", salary: " +
          employees1[i].salary;
       ul.appendChild(li);
    }
 }; 