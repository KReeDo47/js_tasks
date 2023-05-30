let elem = document.getElementById("elem");

function func(name, surname) {
console.log(this.value + ", " + name + " " + surname);
}

// привязываем контекст выполнения функции func к элементу elem
let funcBound = func.bind(elem);

funcBound("John", "Smit"); // выводит 'привет, John Smit'
funcBound("Eric", "Luis");