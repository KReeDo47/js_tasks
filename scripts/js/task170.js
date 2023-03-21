// 1 
function func1() {
    return 3;
 }
 function func2() {
    return 5;
 }

 console.log(func1() + func2());

 // 2
 function sum2(arr) {
    let res = 0;

    for (let elem of arr) {
       res += elem;
    }
    return res;
 }

 console.log(sum2([1, 2, 3, 4, 5]));

 // 3
 let arr = [1, 2, 3, 4, 5];

      function func3(array) {
         let res = 0;

         for (let elem of array) {
            res += elem;
         };

         return res;
      };

      console.log(func3(arr))

      // 4

      function func41() {
         return 3;
      }
      function func42() {
         return 5;
      }

      console.log(func41() + func42());

      // 5

      let arr5 = [1, 2, 3, 4, 5];

      console.log(sum5(arr5));

      function sum5(arr) {
         let sum = 0;

         for (let elem of arr) {
            sum += elem;
         }

         return sum;
      }

      // 6

      let res = sum([1, 2, 3, 4, 5]);

      console.log(res);

      function sum(arr) {
         let sum = 0;

         for (let elem of arr) {
            sum += elem;
         }
         return sum;
      }

      // 7

      function add7(num) {
         if (num <= 9) {
            return num + '0';
         }
      };

      console.log(add7(9))

      // 8

      let arr8 = [1, 2, 3, 4, 5];
      let sum1 = sum8(arr8);

      console.log(sum1);

      function sum8(arr) {
         let res = 0;

         for (let elem of arr) {
            res += elem;
         }

         return res;
      }

      // 9

      let num = 12345;
      let res9 = getDigitsSum(num);

      console.log(res9);

      function getDigitsSum(number) {
         let arr = String(number).split('');
         let sum = 0;

         for (let elem of arr) {
            sum += Number(elem);
         }

         return sum;
      }

      // 10

      console.log(isPrime(13)); // должен вывести true

      function isPrime(num) {
         for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
               return true;
            } else {
               return false;
            }
         }
      }