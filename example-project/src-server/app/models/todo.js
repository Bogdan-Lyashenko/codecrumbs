var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});