import React, { useContext, useState } from 'react'
import { Context } from '../pages/Context';

function AddComment({feed}) {
    const { state, dispatch } = useContext(Context);
    const { allFeed } = state;
    const [comment, setComment] = useState("");

    function handleSubmitNewComment(feedId) {
        const addComment = {
            commentMessage: comment,
            commentDate: Date.now(),
            userId: 13888379833130,
            commentId: Date.now(),
        }

        const findUser = allFeed.map(item => {
            if (item.id === feed.id) {
                console.log([...item.comments, addComment]);
                return {
                    ...item,
                    comments: [...item.comments, addComment]
                };
            } 
            return item;
        });
        dispatch({type: "ALL_FEEDS", allFeed: findUser});
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => handleSubmitNewComment(feed)} aria-label="submit your comment">Post</button>
        </div>
    )
}

export default AddComment
