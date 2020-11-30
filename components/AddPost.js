import React from 'react';

function AddPost() {
    return (
        <form>
            <fieldset>
                <label>New post:</label>
                <textarea rows="4" type="text" placeholder="Say what’s on your mind..."></textarea>
            </fieldset>
            <fieldset>
                <label>Picture url: </label>
                <input type="url" />
            </fieldset>
            <button>Post</button>
        </form>
    )
}

export default AddPost;
