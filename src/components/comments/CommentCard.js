import React from 'react'

export const CommentCard = ({comment}) => {
    return (
        <div>
            <p>{comment.text !== "" ? comment.text : "This review has no text"}</p>
            <h4>{comment.rating}/5</h4>
        </div>
    )
}
export default CommentCard;