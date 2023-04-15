// 1

         let arr1 = [1, 2, 3, 4, 5];
         let newArr1 = [];

         let result = arr1.map(function (elem) {
            newArr1.push(Math.pow(elem, 2));
         });

         console.log(newArr1);

         // 2

         let arr2 = ["a", "b", "c", "d"];

         let result2 = arr2.map(function (elem) {
            return elem + "!";
         });

         console.log(result2);

         // 3

         let arr3 = ["hello", "world", "Ali"];

         let result3 = arr3.map(function (elem) {
            return elem.split("").reverse().join("");
         });

         console.log(result3);

         // 4

         let arr4 = ["123", "456", "789"];
         let newArr4 = [];

         let result5 = arr4.map(function (elem) {
            elem.split("");
            return newArr4.push(Number(elem));
         });

         console.log(newArr4);

         // 5

         let arr6 = [1, 2, 3, 4, 5];

         let result6 = arr6.map(function (elem, index) {
            return elem * index;
         });

         console.log(result6);