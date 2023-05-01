import React from "react";
import { Link } from "react-router-dom";

function TripDetails({ trip }) {
    const {id, name, location, rating, price, image_url} = trip;

    return (
        <div>
            <Link className="details" to={`/trips/${id}`}/>
            <div className="trip-cards">
                <img src={image_url} alt="hotel"/>
                <article className="card-details">
                    <div>
                        <h2 className="card-name">{name} Hotel</h2>
                        <h3 className="card-locale">{location}</h3>
                        <br/>
                        <h2 className="card-price">{`$${price}`} <span className="timeframe">per night</span> </h2>
                    </div>
                    <br/>
                    <div>
                        <h2 className="rating">{rating ? '★ '+ rating : "★ unrated"}</h2>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default TripDetails;