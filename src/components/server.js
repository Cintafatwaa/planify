const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

// Middleware untuk membaca body request dalam format JSON
app.use(express.json());

// Path file JSON
const dataFilePath = './data/events.json';

// Endpoint untuk membaca data JSON
app.get('/events', (req, res) => {
    fs.readFile(dataFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint untuk menambahkan data baru ke file JSON
app.post('/events', (req, res) => {
    const newEvent = req.body;
    fs.readFile(dataFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            const events = JSON.parse(data);
            events.push(newEvent);
            fs.writeFile(dataFilePath, JSON.stringify(events, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error saving data');
                } else {
                    res.status(201).send('Event added');
                }
            });
        }
    });
});

// Endpoint untuk mengupdate data pada file JSON
app.put('/events/:id', (req, res) => {
    const eventId = parseInt(req.params.id, 10);
    const updatedEvent = req.body;

    fs.readFile(dataFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            let events = JSON.parse(data);
            events = events.map(event => event.id === eventId ? { ...event, ...updatedEvent } : event);
            fs.writeFile(dataFilePath, JSON.stringify(events, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error saving data');
                } else {
                    res.send('Event updated');
                }
            });
        }
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
