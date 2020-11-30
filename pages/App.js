import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
