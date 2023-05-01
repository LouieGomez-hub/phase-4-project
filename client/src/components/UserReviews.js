import React from "react";

function UserReviews({ reviews }) {

    function showReviews() {
        reviews.map((review) => {
            return (
                <button className="userReview" key={review.id} href={`/trips/${review.trip_id}`}>
                    <p>{review.comment.substr(0, 40)}...</p>
                </button>
            )
        })
    }

    return (
        <div>
            <h4>Your Reviews</h4>
            {showReviews()}
        </div>
    );
}

export default UserReviews;