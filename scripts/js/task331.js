window.onload = function () {
    let arr = [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
       [10, 11, 12],
    ];
    for (let i = 0; i < arr.length; i++) {
       document.write("<tr>");
       for (let j = 0; j < arr[i].length; j++) {
          document.write("<td>" + arr[i][j] + "</td>");
       }
       document.write("</tr>");
    }
 };