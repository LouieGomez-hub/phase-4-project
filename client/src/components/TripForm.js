import React, { useState } from "react";

function TripForm({ onAddTrip }) {
    const [errors, setErrors] = useState([]);
    const [trips, setTrips] = useState({
        name: "",
        location: "",
        description: "",
        price: "",
        image_url: "",
        rating: 0
    })
    
    function handleSubmit(e) {
        e.preventDefault();

        setErrors([]);

        fetch("/trips", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trips)
        })
        .then((res) => {
            if(res.ok) {
                onAddTrip(trips)
                setTrips({name: "", location: "", description: "", price: "", image_url: ""})
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
        })
    }

    function handleChange(e) {
        setTrips({...trips, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form className="NewTrip" onSubmit={(e) => handleSubmit(e)}>
                <h4>Book Your Own Trip</h4>
                <label>Hotel
                    <br/>
                    <input 
                        type="text"
                        name="name"
                        value={trips.name}
                        placeholder="Hotel"
                        onChange={(e) => handleChange(e)}
                    />  
                </label>
                <br/>
                <label>Location
                    <br/>
                    <input 
                        type="text"
                        name="location"
                        value={trips.location}
                        placeholder="Italy"
                        onChange={(e) => handleChange(e)}
                    />  
                </label>
                    <br/>
                <label>Price
                    <br/>
                    <input 
                        type="number"
                        name="price"
                        value={trips.price}
                        placeholder="100"
                        onChange={(e) => handleChange(e)}
                    />  
                </label>
                    <br/>
                <label>Image URL
                    <br/>
                    <input
                        type="text"
                        name="image_url"
                        value={trips.image_url}
                        placeholder="Paste URL here"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                    <br/>
                <label htmlFor="description">Description
                    <br/>
                    <textarea 
                        type="textarea"
                        name="description"
                        value={trips.description}
                        placeholder="Tell us more..."
                        onChange={(e) => handleChange(e)}
                    >
                    </textarea>      
                </label>

                <div className="errorContainer">
                    {errors.map((err) => (
                        <span className="error-message" key={err}>{`Invalid: ${err}`}</span>
                    ))
                    }
                </div>
                <button variant="warning" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TripForm;