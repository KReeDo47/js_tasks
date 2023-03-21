// 1 

         function test1() {
            let num = 1;

            function func() {
               console.log(num);
            }

            func();
         }

         test1(); // 1

         // 2

         function test2() {
            let num = 1;

            function func() {
               console.log(num);
            }
         }

         test2(); // нечего т к не вызвали функцию func

         // 3

         function test3() {
            let num = 1;

            function func() {
               console.log(num);
            }

            func();
         }

         // нечего, т к не вызвали функцию test3

         // 4

         function test4() {
            let num;

            function func() {
               console.log(num);
            }

            num = 1;
            func();

            num = 2;
            func();
         }

         test4(); // 1   2

         // 5

         function test5(num1, num2) {
            function func() {
               console.log(num1 + num2);
            }

            func();
         }

         test5(1, 2); // 3

         // 6

         function test6(num1, num2) {
            function func() {
               console.log(num1 + num2);
            }

            num1 = 2;
            func();
         }

         test6(1, 2); // 4

         // 7

         function test7(num) {
            function func(localNum) {
               console.log(localNum);
            }

            func(num);
         }

         test7(1); // 1

         // 8

         function test8(num) {
            function func(localNum) {
               console.log(localNum);
            }

            func(num + 1);
         }

         test8(1); // 2

         // 9

         function test9(num) {
            function func(localNum) {
               console.log(num);
            }

            func(num + 1);
         }

         test9(1); // 1

         // 10

         function test10(num) {
            function func(localNum) {
               localNum = 2;
            }

            func(num);
            console.log(num);
         }

         test10(1); // 1

         // 11

         /* function test11(num) {
            function func(localNum) {
               localNum = 2;
            }
            func(num);
            console.log(localNum);
         }
         test11(1); // error
         */

         // 12

         function test12(num) {
            function func(localNum) {
               num = 2;
            }

            func(num);
            console.log(num);
         }

         test12(1); // 2

// 13

         function test13(num) {
            function func(num) {
               console.log(num);
            }

            func(num);
         }

         test13(1); // 1

         // 14

         function test14(num) {
            function func(num) {
               num = 2;
            }

            func(num);
            console.log(num);
         }

         test14(1); // 1

         // 15

         function test15(num) {
            function func(num) {
               console.log(num);
            }

            num = 2;
            func(num);
         }

         test15(1); // 2

         // 16

         function test16(num) {
            function func(num) {
               console.log(num);
            }

            func(num);
            num = 2;
         }

         test16(1); // 1