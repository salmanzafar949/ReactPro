import React from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";
import {UserProvider} from "./utils/context/UserContext";
import GuestRoute from "./utils/routes/GuestRoute";
import AuthRoute from "./utils/routes/AuthRoute";

const App = () => {

    return <Router>
        <UserProvider>
            <Header/>
            <Switch>
                {
                    routes.map((route, index) => {
                        if (route.middleware === "guest")
                        {
                            return <GuestRoute key={index}
                                               path={route.path}
                                               exact={route.exact}
                                               component={route.component}/>
                        }

                        if (route.middleware === "auth")
                        {
                            return <AuthRoute  key={index}
                                               path={route.path}
                                               exact={route.exact}
                                               component={route.component}/>
                        }

                        return <Route key={index}
                                      path={route.path}
                                      exact={route.exact}
                                      component={route.component}/>
                    })
                }
            </Switch>
        </UserProvider>
    </Router>
}

export default App;
