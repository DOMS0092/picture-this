import React from 'react'

export const CommentCard = ({comment}) => {
    const renderStars = () =>{
        let stars = "" 
        for (let index = 0; index < comment.rating; index++) {
            stars+="★";   
        }
        return stars
    }
    return (
        <div>
            <p>{comment.text !== "" ? comment.text : "This review has no text"}</p>
            <h4>{renderStars()}/5</h4>
        </div>
    )
}
export default CommentCard;