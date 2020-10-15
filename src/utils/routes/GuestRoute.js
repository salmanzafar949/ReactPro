import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Route, Redirect} from "react-router-dom";


const GuestRoute = (props) => {

    const [isLoggedIn] = useContext(UserContext)

    if (!isLoggedIn)
        return <Route {...props}/>
    else
        return <Redirect to={'/'}/>

}

export default GuestRoute;
