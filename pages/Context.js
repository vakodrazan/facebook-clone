import React, { createContext, useEffect, useState } from 'react';
import feedPost from "../feedPost.json";

const Context = createContext();

function ContextProvider({children}) {
    const [allFeed, setAllFeed] = useState([]);

    useEffect(() => {
        setAllFeed(feedPost);
    }, [])
    return (
        <Context.Provider value={{ allFeed }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
