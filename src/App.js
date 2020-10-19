import React from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";
import {UserProvider} from "./utils/context/UserContext";
import GuestRoute from "./utils/routes/GuestRoute";
import AuthRoute from "./utils/routes/AuthRoute";
import NotFound from "./pages/NotFound";
import {AnimatePresence} from "framer-motion";
import AnimatedRoute from "./utils/routes/AnimatedRoute";

const RenderApplicationRoutes = () => {

    const location = useLocation();

    return  <Switch key={location.pathname} location={location}>
        {
            routes.map((route, index) => {
                if (route.middleware === "guest")
                {
                    return <GuestRoute key={index} path={route.path} exact={route.exact}>
                        <route.component/>
                    </GuestRoute>
                }

                if (route.middleware === "auth")
                {
                    return <AuthRoute  key={index} path={route.path} exact={route.exact}>
                        <route.component/>
                    </AuthRoute>
                }

                return <AnimatedRoute key={index} path={route.path} exact={route.exact}>

                    <route.component/>
                </AnimatedRoute>
            })
        }

        <Route path={'*'}> <NotFound/> </Route>
    </Switch>
}

const App = () => {

    return <Router>
        <UserProvider>
            <Header/>
            <AnimatePresence exitBeforeEnter>
                <RenderApplicationRoutes/>
            </AnimatePresence>
        </UserProvider>
    </Router>
}

export default App;
