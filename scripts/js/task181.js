// 1

      function func1() {
         console.log('!');
      };

      // Function Declaration

      // 2

      let func = function () {
         console.log('!');
      };

      // Function Expression

      // 3

      // Обращаемся к функции до ее объявления:
      func(); //выведет '!'

      function func() {
         console.log('!');
      }

      // 4

      func(); //ошибка, такой функции еще нет!

      let func = function () {
         console.log('!');
      };

      // 5

      let func1 = function () {
         console.log('!')
      };

      let func2 = function () {
         console.log('!')
      };

      function func3() {
         console.log('!')
      };
