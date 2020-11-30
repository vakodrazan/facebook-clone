import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPost from '../components/AddPost';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Options from '../components/Options';
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
                <Route path="/options">
                    <Options />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
