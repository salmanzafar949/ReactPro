import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Route, Redirect} from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute";


const GuestRoute = ({children, ...rest}) => {

    const [isLoggedIn] = useContext(UserContext)

    if (!isLoggedIn)
        return <AnimatedRoute {...rest}>{children}</AnimatedRoute>
    else
        return <Redirect to={'/'}/>

}

export default GuestRoute;
