const express = require('express');
const connectDB = require('./database');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Verbinde mit MongoDB
connectDB();

// Middleware
app.use(express.json()); // Zum Parsen von JSON-Daten


app.use('/api/oral-exam/users', userRoutes);

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
