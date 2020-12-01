import React, { createContext, useEffect, useState } from 'react';
import feedPost from "../feedPost.json";
import userData from "../userData.json";

const Context = createContext();

function ContextProvider({children}) {
    const [allFeed, setAllFeed] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        setAllFeed(feedPost);
    }, []);
    useEffect(() => {
        setAllUsers(userData);
    }, [])

    function submitPost(e) {
        e.preventDefault();
        const form = e.target;
        const newPost = {
            id: Date.now(),
            date: Date.now(),
            description: form.addText.value,
            photo: form.addUrl.value,
            like: 0,
            comments: []
        }
        setAllFeed([...allFeed, newPost])
        form.reset();
    }

    function addNewComment(feedId) {
        const finding = allFeed.find(item => item.id === feedId);
        console.log(finding);
    }

    return (
        <Context.Provider 
            value={{
                allFeed, 
                allUsers,
                submitPost,
                addNewComment,
                newComment,
                setNewComment,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
