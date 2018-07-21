const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Remove warnings

module.exports = mongoose.connect('mongodb://localhost/todo')

