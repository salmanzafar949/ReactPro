import React, {createContext, useEffect, useState} from "react";
import firebase from "../../config/firebase";

export const UserContext = createContext();


export const UserProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user)
            {
                setUser(user);
                setIsLoggedIn(true)
            }
            else
            {
                setUser({});
                setIsLoggedIn(false)
            }
        })
    },[])

    return <UserContext.Provider value={[isLoggedIn, setIsLoggedIn, user, setUser]}>
        {
            props.children
        }
    </UserContext.Provider>
}

