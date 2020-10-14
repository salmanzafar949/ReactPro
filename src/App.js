import React from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";

const App = () => {

    return <Router>
        <Switch>
            <Route path={'/'} exact={true}>
                <Home/>
            </Route>
            <Route path={'/login'} exact={true}>
                <Login/>
            </Route>
            <Route path={'/gallery'} exact={true}>
                <Gallery/>
            </Route>
        </Switch>
    </Router>
}

export default App;
