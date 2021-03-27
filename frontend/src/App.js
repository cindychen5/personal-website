import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {Home} from './Home';
import {FourOhFour} from "./FourOhFour";

export function App() {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={FourOhFour} />
                </Switch>
            </BrowserRouter>

        </>
    )
}