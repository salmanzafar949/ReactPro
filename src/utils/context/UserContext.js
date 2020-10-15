import React, {createContext, useEffect, useState} from "react";
import firebase from "../../config/firebase";
import Loader from "../../components/Loader";

export const UserContext = createContext();


export const UserProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        firebase.auth().onAuthStateChanged(user => {
            if (user)
            {
                setUser(user);
                setIsLoggedIn(true)
                setIsLoading(false)
            }
            else
            {
                setUser({});
                setIsLoggedIn(false)
                setIsLoading(false)
            }
        })
    },[])

    return <UserContext.Provider value={[isLoggedIn, setIsLoggedIn, user, setUser, isLoading, setIsLoading]}>
        {
           isLoading ? <Loader/> : props.children
        }
    </UserContext.Provider>
}

