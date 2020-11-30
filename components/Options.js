import React from 'react';

function Options() {
    return (
        <form>
            <p>Options:</p>
            <fieldset>
                <label>Username: </label>
                <input type="text" placeholder="Type your username here" />
            </fieldset>
            <fieldset>
                <label>Profile picture: </label>
                <input type="text" placeholder="Paste a URL here" />
            </fieldset>
            <button aria-label="save you options">Save</button>
        </form>
    )
}

export default Options;
