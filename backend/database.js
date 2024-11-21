const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://uabdullah4242:HwjNNA1VRhTxcffi@cluster0.kitro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        });
        console.log('MongoDB verbunden!');
    } catch (err) {
        console.error('Fehler beim Verbinden mit MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
