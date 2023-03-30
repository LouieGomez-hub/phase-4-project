import React, { useState, useEffect } from 'react';
import TripDetails from './TripDetails';

function Trips() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch("/trips")
        .then((res) => res.json())
        .then(setTrips);
    }, []);

    return (
        <div className='tripbooker-page'>
            <div className='trips'>
                {trips.map((trip) => {
                    return(<TripDetails key={trip.id} trip={trip} />)
                })}
            </div>
        </div>
    )
}

export default Trips;