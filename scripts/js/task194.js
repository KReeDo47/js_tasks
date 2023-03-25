// 1
function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let result = each([1, 2, 3, 4, 5],
    function(num) {
    return num * 2;
});

console.log(result);

// 2
function each(arr, callback) {
    let result2 = [];

    for (let elem of arr.reverse()) {
        result2.push(callback(elem));
    }

    return result2;
}

let result2 = each(["a", "b", "c", "d"],
    function(str) {
    return str;
});

console.log(result2);

// 3
function each3(arr, callback) {
    let result = [];

    for (let elem of arr) {
       result.push(
          callback(elem.slice(0, 1).toUpperCase() + elem.slice(1))
       );
    }

    return result;
 }

 let result3 = each3(["hello", "world", "ali"], function (str) {
    return str;
 });

 console.log(result3);

 // 4
 function square(num) {
    return Math.pow(num, 3);
 }

 let result4 = each([1, 2, 3, 4, 5], square);
 console.log(result4);