import React from "react";
import { Link } from "react-router-dom";

function TripDetails({ trip }) {
    const {id, name, location, rating, price, image_url} = trip;

    return (
        <div>
            <Link className="details" to={`/trips/${id}`}/>
            <div className="trip-cards">
                <img src={image_url} alt=""/>
                <article className="card-details">
                    <div>
                        <h2>{name}</h2>
                        <h3>{location}</h3>
                        <h2>{`$${price}`} <span className="timeframe">night</span> </h2>
                    </div> 
                    <div>
                        <h2 className="rating">{rating ? '★'+ rating : "★ unrated"}</h2>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default TripDetails;