const express = require('express');
const connectDB = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

// Verbinde mit MongoDB
connectDB();

// Middleware
app.use(express.json()); // Zum Parsen von JSON-Daten

// Beispiel-Route
app.get('/api/users', (req, res) => {
    res.json({ message: 'Produkte abgerufen!' });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
