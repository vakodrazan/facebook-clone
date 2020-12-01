import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function AddComment({feed}) {
    const { newComment, setNewComment, addNewComment } = useContext(Context);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                name="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}

            />
            <button onClick={() => addNewComment(feed.id)} aria-label="submit your comment">Post</button>
        </div>
    )
}

export default AddComment
