let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
      let sum = 0;

      for (let elem in obj) {
         if (obj[elem] == 10 || obj[elem] == 20) {
            sum += obj[elem];
         } else {
            continue;
         };
      };

      console.log(sum);