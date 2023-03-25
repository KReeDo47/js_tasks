// 1
let func = (function() {
    let num = 1;

    return function() {
        console.log(num);
        num++;
    }
})();

// 2
let func2 = (function() {
    let num = 1;

    return function() {
        if (num == 5) {
            console.log(num);
            num = 1;
        } else {
        console.log(num);
        num++;
        }
    };
})();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
func5();
