const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const usersFilePath = path.resolve(__dirname, 'users.json');

// Endpoint untuk menambahkan pengguna baru
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email dan password wajib diisi.');
    }

    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            return res.status(500).send(`Error membaca file users.json: ${err.message}`);
        }

        const users = data.length ? JSON.parse(data) : [];
        const isDuplicate = users.some(user => user.email === email);
        if (isDuplicate) {
            return res.status(400).send('Email sudah terdaftar.');
        }

        const newUser = { email, password };
        users.push(newUser);

        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Terjadi kesalahan saat menyimpan data pengguna.');
            }
            res.status(200).send('Berhasil Registrasi');
        });
    });
});

module.exports = router;
