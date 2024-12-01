const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const userRoutes = require('./routes/result');

const app = express();
const PORT = process.env.PORT || 5000;

// Verbinde mit MongoDB
connectDB();

// Content-Security-Policy Middleware
app.use(function (req, res, next) {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; connect-src 'self' https://api.segment.synthesia.io https://api.prd.synthesia.io; style-src 'self' 'unsafe-inline';"
    );
    next();
});


// Middleware
app.use(cors()); // CORS aktivieren
app.use(express.json()); // Zum Parsen von JSON-Daten

// Routen
app.use('/api/oral-exam', userRoutes);

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
