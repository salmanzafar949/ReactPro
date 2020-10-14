import React from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";

const App = () => {

    return <Router>
        <Header/>
        <Switch>
            {
                routes.map((route) => {
                   return <Route path={route.path} exact={route.exact} component={route.component}/>
                })
            }
        </Switch>
    </Router>
}

export default App;
