import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
const Navigation=()=>{
return(
    <nav className="col-md-2">
        <ul>
            <li><div className="sidebar-item"><Link to={'/'}>List all Posts</Link></div></li>
            <li><div className="sidebar-item"><Link to={'/create'}>Add new Post</Link></div></li>
        </ul>
    </nav>
);
};
export default Navigation;