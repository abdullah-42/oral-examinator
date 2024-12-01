const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const userRoutes = require('./routes/result');

const app = express();
const PORT = process.env.PORT || 5000;

// Verbinde mit MongoDB
connectDB();

// Middleware
app.use(cors()); // CORS aktivieren
app.use(express.json()); // Zum Parsen von JSON-Daten

// Routen
app.use('/api/oral-exam', userRoutes);

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
