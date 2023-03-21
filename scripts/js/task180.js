// 1
function func() {
    return console.log('Hello world!');
 };

 // 2
 func();

 // 3
 console.log(func);

 // 4
 func = 123;
 console.log(func);

 // 5
 function func1() {
    return 3;
 }

 // 6
 function func1() {
    console.log('555');
 }

 let func2 = func1;
 func2();
 func1();

 // 7
 console.log(func1() + func2());

 // 8
 let func3 = function() {
    return 1;
 }
 func1();

 // 9
 let func4 = function () {
    return 2;
 };
 func4();

 // 10
 console.log(func3() + func4())




 

