import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPost from '../components/AddPost';
import Feed from '../components/Feed';
import Header from '../components/Header';
function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route path="/addPost">
                    <AddPost />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
