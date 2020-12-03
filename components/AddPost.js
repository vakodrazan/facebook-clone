import React, { useContext } from 'react';
import { Context } from '../pages/Context';

function AddPost() {
    const { state, dispatch } = useContext(Context);
    const { allFeed, currentUser } = state;

    function submitPost(e) {
        e.preventDefault();
        const form = e.target;
        const newPost = {
            id: Date.now(),
            userId: currentUser,
            date: Date.now(),
            description: form.addText.value,
            photo: form.addUrl.value,
            likes: [],
            comments: []
        }

        dispatch({ type: "ADD_NEW_POST", allFeed: [...allFeed, newPost]})
        form.reset();
    }

    return (
        <form onSubmit={submitPost}>
            <fieldset>
                <label>New post:</label>
                <textarea 
                    rows="4" 
                    type="text" placeholder="Say what’s on your mind..."
                    name="addText"
                ></textarea>
            </fieldset>
            <fieldset>
                <label>Picture url: </label>
                <input 
                    type="url" 
                    name="addUrl"
                />
            </fieldset>
            <button 
                aria-label="Commit your post"
            >Post</button>
        </form>
    )
}

export default AddPost;
