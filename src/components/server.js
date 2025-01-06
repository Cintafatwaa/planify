const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3000', // Ganti dengan URL frontend Anda
};
app.use(cors(corsOptions));
app.use(express.json());

// Import router dari file terpisah
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');

// Gunakan router pada endpoint masing-masing
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
