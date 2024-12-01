const express = require('express');
const router = express.Router();
const Result = require('../models/Result');


router.get('/results', async (req, res) => {
    try {
        const result = await Result.find();
        console.log(result);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/results', async (req, res) => {
    try {
        const newResult = new Result(req.body);
        await newResult.save();
        res.status(201).json({ message: 'Result saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 
