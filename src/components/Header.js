import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
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
               <Link to={'/login'}>Login</Link>
           </li>
       </ul>
    </nav>
}

export default Header;
