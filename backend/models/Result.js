const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    user: { type: String, required: true },
    punkte: { type: String, required: true },
    status: { type: String, required: true },
    datum: { type: String, required: true },
    stufe: { type: String, required: true },
});

// Modell erstellen
const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;





