const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Korrigiere den Pfad entsprechend

// GET: Alle Benutzer abrufen
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users); // Benutzer in der Konsole loggen
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router; // Stelle sicher, dass du den Router exportierst
