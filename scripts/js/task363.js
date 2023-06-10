let sum = (arr, pow) => {
    let res = 0;
    for (let elem of arr) {
       res += elem ** pow;
    }
    return res;
 };

 let avg1 = (arr) => {
    return sum(arr, 1) / arr.length;
 };

 let avg2 = (arr) => {
    return sum(arr, 2) / arr.length;
 };

 let avg3 = (arr) => {
    return sum(arr, 3) / arr.length;
 };

 export { avg1, avg2, avg3 }; 