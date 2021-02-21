import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

export const Navbar = () => {
    return (
        <>
            <nav id='main-nav'>
                <Link to='/home' id='logo'>
                    <h1 className='h1'>presQRibe</h1>
                </Link>

                <ul>
                    <li>
                        <NavLink to='/sign-up' id='sign-up' className='h3' >
                            Register
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/login' id='login' className='h3' >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav id='sub-nav'> 
                <ul>
                    <li>
                        <NavLink to='/about' 
                            className='h3'
                            activeClassName='selected'    
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' 
                            className='h3'
                            activeClassName='selected'
                        >
                            Resources
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/search' 
                            className='h3'
                            activeClassName='selected'
                            className='h3'
                        >
                            Search
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}
