import React, { useEffect, useState } from 'react';

function Bookings() {
    const [bookings, setBookings] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h3>You have {bookings.length} bookings</h3>
            {
                bookings.map(book => <li>{book.name} you booked the hotel from {book.checkIn} to: {book.checkOut}</li>)
            }
        </div>
    );
};

export default Bookings;