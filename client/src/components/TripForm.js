import React, { useState } from "react";

function TripForm({ onAddTrip }) {
    const [, setErrors] = useState([]);
    const [tripData, setTripData] = useState({
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

        fetch('/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tripData)
        })
        .then((res) => {
            if(res.ok) {
                onAddTrip(tripData)
                setTripData({name: "", location: "", description: "", price: "", image_url: ""})
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
        })
    }

    function handleChange(e) {
        setTripData({...tripData, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form id="NewTrip" onSubmit={(e) => handleSubmit(e)}>
                <h4 className="header">Book Your Own Trip</h4>
                <div className="formContainer">
                    <label>Hotel
                        <br/>
                        <input
                            id="hotel"
                            type="text"
                            name="name"
                            value={tripData.name}
                            placeholder="Hotel"
                            onChange={(e) => handleChange(e)}
                        />  
                    </label>
                        <br/>
                    <label>Location
                        <br/>
                        <input 
                            id="location"
                            type="text"
                            name="location"
                            value={tripData.location}
                            placeholder="Italy"
                            onChange={(e) => handleChange(e)}
                        />  
                    </label>
                        <br/>
                    <label>Price
                        <br/>
                        <input
                            id="price" 
                            type="number"
                            name="price"
                            value={tripData.price}
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
                            value={tripData.image_url}
                            placeholder="Paste URL here"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                        <br/>
                    <label htmlFor="description">Description
                        <br/>
                        <textarea
                            id="description" 
                            type="textarea"
                            name="description"
                            value={tripData.description}
                            placeholder="Tell us more..."
                            onChange={(e) => handleChange(e)}
                        >
                        </textarea>      
                    </label>
                </div>

                {/* <div className="errorContainer">
                    {errors.map((err) => (
                        <span className="error-message" key={err}>{`Invalid: ${err}`}</span>
                    ))
                    }
                </div> */}
                <button className="bookerSubmit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TripForm;