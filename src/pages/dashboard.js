import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconPlanify from '../assets/logo.png';
import Create from '../pages/create';

function Dashboard() {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data from db.json
    useEffect(() => {
        fetch('http://localhost:5000/events')
          .then((response) => response.json())
          .then((data) => {
            setEvents(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error loading data:', error);
            setLoading(false);
          });
      }, []);

    // Save event (update or add)
    const handleSaveEvent = (newEvent) => {
        setLoading(true);
        if (editingEvent) {
            // Update event
            console.log('Updating event with ID:', newEvent.id);  // Log ID for debugging
            fetch(`http://localhost:5000/events/${newEvent.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to update event');
                }
                return response.json();
            })
            .then((updatedEvent) => {
                setEvents((prev) =>
                    prev.map((event) => (event.id === newEvent.id ? updatedEvent : event))
                );
                setEditingEvent(null);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error updating event:', error);
                setLoading(false);
            });
        } else {
            // Add new event
            fetch('http://localhost:5000/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent),
            })
            .then((response) => response.json())
            .then((createdEvent) => {
                setEvents((prev) => [...prev, createdEvent]);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error adding event:', error);
                setLoading(false);
            });
        }
    };

    // Delete event
    const handleDeleteEvent = (id) => {
        console.log('Deleting event with ID:', id);  // Log ID for debugging
        fetch(`http://localhost:5000/events/${id}`, { method: 'DELETE' })
            .then(() => {
                console.log('Event deleted successfully');
                setEvents((prev) => prev.filter((event) => event.id !== id));
            })
            .catch((error) => console.error('Error deleting event:', error));
    };

    // Edit event
    const handleEditEvent = (event) => {
        setEditingEvent(event);
    };

    if (loading) {
        return <p className="text-center">Memuat data...</p>;
    }

    return (
        <div>
            <div className='flex items-center space-x-4 p-4 border-b border-gray-300'>
                <Link to='/beranda'>
                    <img alt="icon-planify" src={IconPlanify} className="w-32" />
                </Link>
            </div>

            <h1 className="text-2xl font-bold p-4">Form</h1>
            <Create onSave={handleSaveEvent} editingEvent={editingEvent} />
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Daftar Acara</h2>
                <ul>
                    {events.map((event) => (
                        <li key={event.id} className="border p-4 rounded mb-2">
                            <h3 className="text-lg font-semibold">{event.name}</h3>
                            <p className="text-sm text-gray-600">Waktu: {event.time}</p>
                            <p className="text-sm">{event.description}</p>
                            <div className="space-x-2 mt-2">
                                <button
                                    onClick={() => handleEditEvent(event)}
                                    className="px-2 py-1 bg-yellow-500 text-white rounded">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteEvent(event.id)}
                                    className="px-2 py-1 bg-red-500 text-white rounded">
                                    Hapus
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
