import React from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";
import {UserProvider} from "./utils/context/UserContext";
import GuestRoute from "./utils/routes/GuestRoute";
import AuthRoute from "./utils/routes/AuthRoute";
import NotFound from "./pages/NotFound";

const RenderApplicationRoutes = () => {

    return  <Switch>
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

        <Route path={'*'}> <NotFound/> </Route>
    </Switch>
}

const App = () => {

    return <Router>
        <UserProvider>
            <Header/>
            <RenderApplicationRoutes/>
        </UserProvider>
    </Router>
}

export default App;
