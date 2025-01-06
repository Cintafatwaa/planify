const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dataFilePath = path.resolve(__dirname, '../data/events.json');

// Endpoint untuk menambahkan acara baru
router.post('/', (req, res) => {
    const newEvent = { id: Date.now(), ...req.body };

    fs.readFile(dataFilePath, (err, data) => {
        if (err) {
            return res.status(500).send('Error membaca data');
        }

        const events = JSON.parse(data);
        events.push(newEvent);

        fs.writeFile(dataFilePath, JSON.stringify(events, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving event data');
            }
            res.status(200).send('Event added');
        });
    });
});

module.exports = router;
