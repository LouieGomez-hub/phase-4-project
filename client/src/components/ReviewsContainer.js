import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

function ReviewsContainer({ user }) {
    const params = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`/trips/${params.id}/reviews`)
        .then((res) => res.json())
        .then(setReviews);
    }, [params.id])

    function updateReviews(reviewData) {
        setReviews([...reviews, reviewData])
    }

    function handleUpdateReview(reviewID, comment) {
        fetch(`/reviews/${reviewID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: comment })
        })
        .then(res => {
            if(!res.ok) {
                res.json().then((err) => {
                    alert(err.errors)
                    return reviews
                })
            } else {
                setReviews((reviews) => {
                    let updatedReviews = reviews.map(review => {
                        if(review.id === reviewID) {
                            review.comment = comment
                        }
                        return review
                    })
                    return updatedReviews
                })
            }
        })

    }

    function handleDeleteReview(reviewID) {
        fetch(`/reviews/${reviewID}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
                setReviews(reviews.filter((review) => {
                    return review.id !== reviewID
                }))
            }
        })
    }

    return (
        <div className="reviewsContainer">
            <ReviewForm tripID={params.id} updateReviews={updateReviews} />
            {reviews.map(review => {
                return (
                    <Reviews 
                        key={review.id}
                        review={review}
                        user={user}
                        onUpdateReview={handleUpdateReview}
                        onDeleteReview={handleDeleteReview}
                    />
                )
            })}
        </div>
    );
}

export default ReviewsContainer;