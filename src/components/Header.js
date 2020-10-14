import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import firebase from "../config/firebase";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => setIsLoggedIn(true))
    })

    function handleLogout(){
        firebase.auth().signOut()
            .then(() => {
                setIsLoggedIn(false)
                history.replace('/login')
            })
            .catch(err => alert(err.response.data))
    }

    return <nav className="py-5 bg-green-700 text-white">
       <ul className="flex justify-between px-10">
          <span className="flex">
               <li className="mr-5">
                   <Link to={'/'}>Home</Link>
               </li>
              <li className="mr-5">
                  <Link to={'/gallery'}>Gallery</Link>
              </li>
          </span>
           <li>
               {
                   !isLoggedIn ?
                       <button type="button" onClick={handleLogout}> Logout</button>
                       :
                       <Link to={'/login'}>Login</Link>
               }
           </li>
       </ul>
    </nav>
}

export default Header;
