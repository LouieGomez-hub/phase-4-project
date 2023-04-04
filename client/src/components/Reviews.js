import React, { useState } from "react";

function Reviews({ review, user, errors, onUpdateReview, onDeleteReview }) {
    const [edit, setEdit] = useState(false);
    const [comment, setComment] = useState(review.comment);

    function editReview() {
        setEdit(!edit)
        onUpdateReview(review.id, comment)
    }

    return (
        <div className="review">
            {user.id === review.user.id ? 
                <div className="reviewBtn">
                    {!edit ?
                        <button variant="outline-info" onClick={() => {
                            setEdit(!edit)
                        }}
                        >Edit</button>
                    :
                        <button variant="warning" onClick={editReview}>Save Edits</button>
                    }

                    {!edit && (
                        <button onClick={() => {onDeleteReview(review.id)}}>
                            X
                        </button>
                    )}
                </div> : null
            }
            <div>
                {(edit && review.user.id === user.id) ? 
                    <form className="reviewEdits">
                        <label htmlFor="comment"></label>
                        <input
                            type="textarea"
                            rows="rand(3..5)"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </form>
                    : <p>{review.comment}</p>
                }
                <span className="reviewUser">
                    <b>{`@${review.user.username}`}</b>
                </span>
            </div>
        </div>
    );
}

export default Reviews;