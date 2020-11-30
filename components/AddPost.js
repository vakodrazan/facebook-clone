import React, { useContext } from 'react';
import { Context } from '../pages/Context';

function AddPost() {
    const { submitPost } = useContext(Context);

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
