import React, { createContext, useEffect, useState } from 'react';
import feedPost from "../feedPost.json";

const Context = createContext();

function ContextProvider({children}) {
    const [allFeed, setAllFeed] = useState([]);
    const [username, setUsername] = useState("Noeline Marie");
    const [profile, setProfile] = useState("https://iili.io/Fwvaat.jpg");
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        setAllFeed(feedPost);
    }, []);

    function AddNewComment(e) {
        e.preventDefault();
        const form = e.target;
        setNewComment(form.comment.value)
    }

    function submitPost(e) {
        e.preventDefault();
        const form = e.target;
        const newPost = {
            id: Date.now(),
            date: Date.now(),
            description: form.addText.value,
            photo: form.addUrl.value,
            like: 0,
            commenter: "",
            commenterUsername: "",
            comment: "",
            commentDate: "",
        }
        setAllFeed([...allFeed, newPost])
        form.reset();
    }

    return (
        <Context.Provider 
            value={{ 
                username, 
                profile, 
                allFeed, 
                submitPost, 
                newComment, 
                AddNewComment, 
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
