import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exercise from '../pages/Exercise';
import ExerciseNew from '../pages/ExerciseNew';
import NotFound from '../pages/NotFound'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercise} />
                <Route path="/exercise/new" component={ExerciseNew} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App