var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({name: String})
schema.methods.khayaa = function(){
    console.log(this.get("name") + " сказал khayaa")
}

var Mystic = mongoose.model('Mystic', schema);

var person = new Mystic({ name: 'Heydzo' })
person.save(function (err) {
    person.khayaa()
})
