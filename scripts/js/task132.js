let str = 'Wery interesting!!';
   let arr = str.split('') 
   let count = {};         
   let result = 0 

   for (let item of arr) {
      if (count[item] === undefined) {
         count[item] = 1;
      } else {
         count[item]++;
      }
   }

   for (let item in count) {
      if(count[item] > 1) {
         result += count[item]
      };
   };

   console.log(result);