// 1
let date0 = new Date();
console.log(date0.getDay());

// 2
if (date0.getDay() == 0 || date0.getDay() == 6) {
    console.log('${date0.getDay()} - Выходной день')
} else {
    console.log('${date0.getDay()} - Рабочий день')
}

// 3
console.log('До воскресенья осталось ${6 - date0.getDay()}') 




















