import React, { useState, useEffect } from "react";
import UserReviews from "./UserReviews";
import UserTrips from "./UserTrips";
import TripForm from "./TripForm";

function User() {
    const [reviews, setReviews] = useState([]);
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch("/me")
          .then((res) => {
            if(res.ok) {
              res.json().then((user) => {
                setTrips(user.trips)
                setReviews(user.reviews)
              });
            }
        });
      }, []);
    
    function handleAddTrip(newTrip) {
        setTrips((trips) => [...trips, newTrip])
    }

    return (
        <div className="user-container">
            <TripForm onAddTrip={handleAddTrip} />
            <UserTrips trips={trips} />
            <UserReviews reviews={reviews} />
        </div>
    );
}

export default User;