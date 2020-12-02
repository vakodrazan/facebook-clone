import React, { createContext, useEffect, useReducer } from 'react';
import feedPost from "../feedPost.json";
import userData from "../userData.json";

const Context = createContext();

function ContextProvider({children}) {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ALL_FEEDS":
                return { ...state, allFeed: action.allFeed }
            case "ALL_USERS":
                return { ...state, allUsers: action.allUsers }
            case "ADD_NEW_POST":
                return { ...state, allFeed: action.allFeed }
            default: 
                return state
        }
    }, {
        allFeed: [],
        allUsers: [],
    }) 

    useEffect(() => {
        dispatch({ type: "ALL_FEEDS", allFeed: feedPost });
    }, []);
    useEffect(() => {
        dispatch({ type: "ALL_USERS", allUsers: userData });
    }, [])


    return (
        <Context.Provider 
            value={{ state, dispatch }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
