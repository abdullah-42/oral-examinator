const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, //Username
});

module.exports = mongoose.model('User', userSchema);

