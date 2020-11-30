import React, { createContext, useEffect, useState } from 'react';
import feedPost from "../feedPost.json";

const Context = createContext();

function ContextProvider({children}) {
    const [allFeed, setAllFeed] = useState([]);

    useEffect(() => {
        setAllFeed(feedPost);
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
        }
        setAllFeed([...allFeed, newPost])
    }

    return (
        <Context.Provider value={{ allFeed, submitPost }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
