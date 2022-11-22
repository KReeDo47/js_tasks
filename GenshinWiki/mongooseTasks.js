var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Mystic = mongoose.model('Mystic', { name: String })

var person = new Mystic({ name: 'Heydzo' })
person.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('khayaa')
    }
})
