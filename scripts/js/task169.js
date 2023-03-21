// 1

      let arr1 = [1, 2, 3, 4];

/* функция по названию должна считать сумму элементов массива, но в ней присутствует и деление, поэтому разумно назвать функцию 'calcArr'
      function sum(arr) {
         let res = 0;
         for (let elem of arr) {
            res += elem;
         }
         return res / arr.length;
      };
      */

      function calcArr(arr) {

         let res = 0;

         for (let elem of arr) {
            res += elem;
         };

         res = res / arr.length

         return res;
      };

      console.log(calcArr(arr1))


// 2
      /*
      Название функции не подходящее, а так же ф-ия выполняетcя в два действие
      function func(arr1, arr2) {
         let res1 = 0;
         for (let elem of arr) {
            res1 += elem;
         }
         let res2 = 0;
         for (let elem of arr) {
            res2 += elem;
         }
         return res1 / res2;
      }
      */

      let arr2 = [1, 2, 3, 4];
      let arr3 = [5, 6, 7, 8];

      function sumElem(arr) {
         let sum = 0;
         for (let elem of arr) {
            sum += elem
         };
         return sum;
      };

      function calcArr__1(arr1, arr2) {
         let res1 = sumElem(arr1)
         let res2 = sumElem(arr2)
         return res1 / res2;
      };

      console.log(calcArr__1(arr2, arr3));

// 3
/*
      Название не подходящее, а так же ошибки в коде
      function getSum(arr) {
         let res = 0;
         for (let elem of arr) {
            res *= elem;
         }
         return res;
      }
      */

      let arr6 = [1, 2, 3, 4, 5, 6]

      function calcArr_2(arr) {
         let res = 1;

         for (let elem of arr) {
            res *= elem;
         }

         return res;
      };

      console.log(calcArr_2(arr6));