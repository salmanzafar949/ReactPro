import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Route, Redirect} from "react-router-dom";


const AuthRoute = ({children, ...rest}) => {

    const [isLoggedIn] = useContext(UserContext)

    if (isLoggedIn)
        return <Route {...rest}>
            {children}
        </Route>
    else
        return <Redirect to={'/login'}/>

}

export default AuthRoute;
