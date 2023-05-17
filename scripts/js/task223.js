function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
} 

let date7 = new Date();

console.log(
    addZero(date7.getHours()) + ':' +
    addZero(date7.getMinutes()) + ':' +
    addZero(date7.getSeconds()) + ' ' +
    addZero(date7.getDate()) + '.' +
    addZero(date7.getMonth() + 1) + '.' +
    addZero(date7.getFullYear())
)
