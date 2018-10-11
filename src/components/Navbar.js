import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav>
            <ul>
                <li className="logo">HNAPP</li>
                <li><Link to='/'>Home</Link></li>
                <li><NavLink to='/new'>New</NavLink></li>                
                <li><NavLink to='/ask'>Ask</NavLink></li>                
                <li><NavLink to='/show'>Show</NavLink></li>                
                <li><NavLink to='/jobs'>Jobs</NavLink></li>             
            </ul>
        </nav>
      </div>
    )
}

export default withRouter(Navbar)