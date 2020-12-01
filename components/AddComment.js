import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function AddComment() {
    const { commentMessage, setCommentMessage } = useContext(Context);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                value={commentMessage}
                onChange={(e) => setCommentMessage(e.target.value)}

            />
            <button aria-label="submit your comment">Post</button>
        </div>
    )
}

export default AddComment
