import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function AddComment() {
    const { AddNewComment } = useContext(Context);

    return (
        <form onSubmit={AddNewComment}>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                name="comment"
            />
            <button aria-label="submit your comment">Post</button>
        </form>
    )
}

export default AddComment
