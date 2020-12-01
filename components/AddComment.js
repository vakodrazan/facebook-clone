import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function AddComment() {
    const { AddNewComment, commentMessage, setCommentMessage } = useContext(Context);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                value={commentMessage}
                onChange={(e) => setCommentMessage(e.target.value)}

            />
            <button onClick={AddNewComment} aria-label="submit your comment">Post</button>
        </div>
    )
}

export default AddComment
