// 1

         !(function () {
            console.log("!");
         })(); // !

         // 2

         /*function() {
	     console.log('!');
          }(); // error
          */
         // 3

         let result = (function () {
            return "!";
         })();

         console.log(result); // !

         // 4

         let result4 = function () {
            return "!";
         };

         console.log(result4); // код функции

         // 5

         let result5 = function () {
            return "!";
         };

         console.log(result5()); // !

         // 6

         let result6 =
            (function () {
               return 1;
            })() +
            (function () {
               return 2;
            })();

         console.log(result6); // 3

         // 7

         let result7 = (function () {
            return "!";
         })();

         console.log(result7); // !

         // 8

         let result8 = (function () {
            return "!";
         })();

         console.log(result8); // !

         // 9

         let result9 = function () {
            return "!";
         };

         console.log(result9); // код функции

         // 10

         let result10 = function () {
            return "!";
         };

         console.log(result10()); // !

         // 11

         (function (num1, num2) {
            console.log(num1 + num2);
         })(1, 2); // 3

         // 12

         (function () {
            return function () {
               return function () {
                  console.log("!");
               };
            };
         })()()();

         // 13

         (function (num1) {
            return function (num2) {
               console.log(num1 + num2);
            };
         })(1)(2);

         // 14

         (function (num1) {
            return function (num2) {
               return function (num3) {
                  console.log(num1 + num2 + num3);
               };
            };
         })(1)(2)(3);

         // 15 

         let str = "str";

         (function () {
            console.log(1);
         })(); // 1

         // 16

         let str3 = "str"
         
         (function () {
            console.log(1);
         })(); // error