import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../pages/Context';

function Options() {
    const { state, dispatch } = useContext(Context);
    const { allUsers, currentUser } = state;
    const [ userName, setUserName ] = useState("");
    const [ userProfile, setUserProfile ] = useState("");

    const currentUserObj = allUsers.find(user => user.userId === currentUser) || {
        userName: "",
		userProfile: "",
    };
    useEffect(() => {
        setUserName(currentUserObj.userName);
        setUserProfile(currentUserObj.userProfile);
    }, [allUsers])

    function handleNewOptions(e) {
        e.preventDefault();
        const newUserArray = allUsers.map(user => {
            if (user.userId === currentUser) {
                // Update the user
                return {
                    ...user,
                    userName: userName,
                    userProfile: userProfile
                }
            }
            return user
        })

        dispatch({ type: "UPDATE_CURRENT_USER", allUsers: newUserArray })
    }

    return (
        <form onSubmit={handleNewOptions}>
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
