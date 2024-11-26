const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Verbindungs-URI für MongoDB Atlas
        await mongoose.connect('mongodb+srv://uabdullah4242:HwjNNA1VRhTxcffi@cluster0.kitro.mongodb.net/oral-exam?retryWrites=true&w=majority', {
        });
        console.log('MongoDB verbunden!');
    } catch (err) {
        console.error('Fehler beim Verbinden mit MongoDB:', err.message);
        process.exit(1);  // Beendet den Prozess bei einem Fehler
    }
};

module.exports = connectDB;
