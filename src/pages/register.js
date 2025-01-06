import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Fungsi untuk menangani registrasi
    const handleRegister = (e) => {
        e.preventDefault(); // Mencegah halaman reload saat submit

        const newUser = { email, password };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
                if (response.ok) {
                    setMessage('Registrasi Berhasil!');
                    setEmail('');
                    setPassword('');
                    setTimeout(() => navigate('/login'), 1000); // Mengarahkan ke halaman login setelah berhasil
                } else {
                    response.text().then((text) => {
                        setMessage(text); // Menampilkan pesan error dari server
                    });
                }
            })
            .catch((error) => {
                console.error('Error registering user:', error);
                setMessage('Terjadi kesalahan saat menghubungi server.');
            });
    };

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="bg-gray-100 rounded-lg shadow-md p-8 hover:shadow-lg transition w-full max-w-md">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukkan email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukkan password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                        Register
                    </button>
                </form>

                {message && (
                    <div
                        className={`mt-4 p-2 rounded ${
                            message.includes('Berhasil')
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                        }`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Register;
