import React, { useContext } from 'react';
import { Context } from '../pages/Context';
import { FormStyle } from './Styles';

function AddPost() {
    const { state, dispatch } = useContext(Context);
    const { allFeed, currentUser } = state;

    function submitPost(e) {
        e.preventDefault();
        const form = e.target;
        // create a new object for the new post to store all the new value
        // Crab it by name
        const newPost = {
            id: Date.now(),
            userId: currentUser,
            date: Date.now(),
            description: form.addText.value,
            photo: form.addUrl.value,
            likes: [],
            comments: []
        }

        // Push the new object in the comment but keep the existing comments
        dispatch({ type: "ADD_NEW_POST", allFeed: [...allFeed, newPost]})
        form.reset();
    }

    return (
        <FormStyle onSubmit={submitPost}>
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
        </FormStyle>
    )
}

export default AddPost;
