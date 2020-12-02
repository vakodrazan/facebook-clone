import React, { createContext, useEffect, useReducer, useState } from 'react';
import feedPost from "../feedPost.json";
import userData from "../userData.json";

const Context = createContext();

function ContextProvider({children}) {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ALL_FEEDS":
                return {...state, allFeed: action.allFeed}
            case "ALL_USERS":
                return {...state, allUsers: action.allUsers}
            default: 
                return state
        }
    }, {
        allFeed: [],
        allUsers: [],
    }) 

    // const [allFeed, setAllFeed] = useState([]);
    // const [allUsers, setAllUsers] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        dispatch({ type: "ALL_FEEDS", allFeed: feedPost });
    }, []);
    useEffect(() => {
        dispatch({ type: "ALL_USERS", allUsers: userData });
    }, [])

    function submitPost(e) {
        e.preventDefault();
        const form = e.target;
        const newPost = {
            id: Date.now(),
            userId: 160380961400022,
            date: Date.now(),
            description: form.addText.value,
            photo: form.addUrl.value,
            like: [],
            comments: []
        }
        setAllFeed([...allFeed, newPost])
        form.reset();
    }

    function addNewComment(feedId) {
        console.log(finding);
    }

    return (
        <Context.Provider 
            value={{ state, dispatch }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
