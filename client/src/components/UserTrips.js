import React from "react";

function UserTrips({ trips }) {

    function tripsDisplay() {
        trips.map((trip) => {
            return (
                <button key={trip.id} className="userTrip" href={`/trips/${trip.id}`}>{trip.name}</button>
            )
        })
    }

    return (
        <div key="user-trips">
            <h4>Booked Trips</h4>
            {tripsDisplay}
        </div>
    );
}

export default UserTrips;