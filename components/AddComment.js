import React, { useContext, useState } from 'react'
import { Context } from '../pages/Context';

function AddComment({feed}) {
    const { state, dispatch } = useContext(Context);
    const { allFeed } = state;
    const [comment, setComment] = useState("");

    function handleSubmitNewComment(feedId) {
        // push the new value in a new object
        const addComment = {
            commentMessage: comment,
            commentDate: Date.now(),
            userId: 13888379833130,
            commentId: Date.now(),
        }

        // Prevent from pushing an empty comment
        if (comment !== "") {
            // find the item that is focused
            // Update the comments
            const findUser = allFeed.map(item => {
                if (item.id === feedId) {
                    return {
                        ...item,
                        comments: [...item.comments, addComment]
                    };
                } 
                return item;
            }); 
            dispatch({type: "ADD_NEW_COMMENT", allFeed: findUser});
            setComment("")
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a comment..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => handleSubmitNewComment(feed.id)} aria-label="submit your comment">Post</button>
        </div>
    )
}

export default AddComment
