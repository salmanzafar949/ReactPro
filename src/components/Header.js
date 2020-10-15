import {Link, useHistory} from "react-router-dom";
import React, {useContext} from "react";
import firebase from "../config/firebase";
import {UserContext} from "../utils/context/UserContext";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn, user, setUser] = useContext(UserContext);
    const history = useHistory();

    function handleLogout(){
        firebase.auth().signOut()
            .then(() => {
                setIsLoggedIn(false)
                setUser({})
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
                   !isLoggedIn ? <Link to={'/login'}>Login</Link>
                       : <button type="button" onClick={handleLogout}> Logout</button>
               }
           </li>
       </ul>
    </nav>
}

export default Header;
