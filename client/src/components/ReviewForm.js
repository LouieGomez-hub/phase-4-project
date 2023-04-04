import React, { useState, useEffect } from "react";

function ReviewForm({ tripID, updateReviews }) {
    const [userReview, setUserReview] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setShowForm(false)
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: userReview,
                trip_id: parseInt(tripID)
            })
        })
        .then(res => {
            if (!res.ok) {
                res.json().then((err) => {
                    setErrors(err.errors)
                })
            } else {
                setShowForm(false)
                res.json().then((data) => updateReviews(data))
            }
        })
    }

    if (!showForm) return (
        <button variant="outline-light" onClick={() => setShowForm(true)}>Write a review</button>
    )

    return (
        <div className="reviewForm-Container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text"
                    value={userReview}
                    placeholder="Comment"
                    onChange={(e) => setUserReview(e.target.value)}
                />
                <button type="submit">Submit</button>

                <button onClick={() => setShowForm(false)}>Cancel</button>
            </form>
            
            {errors && <div className="errorsContainer">
                {errors.map(error => <span className="error-message" key={error}>{error}</span>)}
                </div>
            }
        </div>
    );
}

export default ReviewForm;