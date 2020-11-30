import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
