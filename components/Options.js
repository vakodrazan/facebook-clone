import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../pages/Context';
import { FormStyle } from './Styles';

function Options() {
    // Crab the state from the context
    const { state, dispatch } = useContext(Context);
    const { allUsers, currentUser } = state;
    const [ userName, setUserName ] = useState("");
    const [ userProfile, setUserProfile ] = useState("");

    // find the user that is logged in and if there is no value set up just pass an empty value
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
        // Find the user logged in
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

        // Push the new change
        dispatch({ type: "UPDATE_CURRENT_USER", allUsers: newUserArray })
    }

    return (
        <FormStyle onSubmit={handleNewOptions}>
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
        </FormStyle>
    )
}

export default Options;
