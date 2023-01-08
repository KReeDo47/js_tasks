var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE mystics';
var seedQuery = 'INSERT INTO mystics (title, nick, avatar, about) VALUES ("Heydzo", "heydzo", "/images/Heydzo.png", "Досин Сиканоин обладает замечательным умом и проницательностью. Пусть он непредсказуем и порою несносен, нельзя не признать, что он талантлив. Комиссии Тэнрё невероятно повезло, что в её рядах есть такой человек."), ("NinGuan", "ninguan", "/images/NinGuan.png", "Все в Ли Юэ любят посплетничать о Нин Гуан, а кажется, что все про неё всё знают, но на самом деле оказывается, что версия нин Гуан каждого человека довольно сильно отличается от версии другого. Но одна вещь остаётся неизменной: все считают Нин Гуан экстраординарной личностью."), ("Reyzor", "reyzor", "/images/Reyzor.png", "Рэйзор — таинственный мальчик, живущий в Вольфендоме. О нём может рассказать всего лишь горстка модштадтцев. Однако, если верить очевидцам, Рэйзор чрезвычайно проворен и путешествует вместе со стаей волков, вдали от людей.")';



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'Ali542434063004',
database: 'genshinwiki'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
