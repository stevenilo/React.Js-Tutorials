import React from 'react';
//importing navbar css stylesheet
import './Navbar.css'
//importing Link from react-router-dom to use in routing
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <ul>
            {/*using <Link to=''> to switch or route to /Home*/}
            <Link to='/Home'>
                <li>
                    Home
                </li>
            </Link>

            {/*using <Link to=''> to switch or route to /Service*/}
            <Link to='/Services'>
                <li>
                    Services
                </li>
            </Link>

            {/*using <Link to=''> to switch or route to /Contactus*/}
            <Link to='/Contactus'>
                <li>
                    Contactus
                </li>
            </Link>

        </ul>
    );
}

export default Navbar;