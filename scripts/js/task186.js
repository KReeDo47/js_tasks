let test = function func() {
    console.log('!'); // выводим '!' 
    func(); // вызываем сами себя
}

test();