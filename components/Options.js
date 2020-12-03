import React, { useState } from 'react';

function Options() {
    const [ userName, setUserName ] = useState("");
    const [ userProfile, setUserProfile ] = useState("");

    

    return (
        <form>
            <p>Options:</p>
            <fieldset>
                <label>Username: </label>
                <input type="text" placeholder="Type your username here" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </fieldset>
            <fieldset>
                <label>Profile picture: </label>
                <input type="text" placeholder="Paste a URL here" value={userProfile} onChange={(e) => setUserProfile(e.target.value)} />
            </fieldset>
            <button aria-label="save you options">Save</button>
        </form>
    )
}

export default Options;
