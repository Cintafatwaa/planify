import React, { useState, useEffect } from 'react';

function Create({ onSave, editingEvent }) {
    const [event, setEvent] = useState({ name: '', time: '', description: '' });

    useEffect(() => {
        if (editingEvent) {
            setEvent(editingEvent);
        }
    }, [editingEvent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(event);
        setEvent({ name: '', time: '', description: '' });  // Reset form after submit
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
                <label className="block font-semibold">Nama Acara</label>
                <input
                    type="text"
                    name="name"
                    value={event.name}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold">Waktu Acara</label>
                <input
                    type="datetime-local"
                    name="time"
                    value={event.time}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold">Deskripsi Acara</label>
                <textarea
                    name="description"
                    value={event.description}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {editingEvent ? 'Update' : 'Tambah'} Acara
            </button>
        </form>
    );
}

export default Create;
