import React from 'react'

function AddComment({feed}) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                name="newComment"
            />
            <button onClick={() => addNewComment(feed.id)} aria-label="submit your comment">Post</button>
        </div>
    )
}

export default AddComment
