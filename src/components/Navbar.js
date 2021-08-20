import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo2.png';
import Button from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">

                <Link to ="/" className="navbar-logo">
                    <img src={logo} alt="logo" width="20%" />
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> 

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/aboutus' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/photogallery' className='nav-links' onClick={closeMobileMenu}>
                            Photo Gallery
                        </Link>
                    </li>

                    {/* <li className="nav-item">
                    <Link to = '/Signup' className='nav-links' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li> */}

                </ul>
                {button && <Button
                buttonStyle='btn--outline'
                >SUBSCRIBE </Button>} {/* && is short hand to return what is after it */}

            </div>

        </nav>
    </>    
    )
}

const handleClick = () => {
    return (<login />)
}

export default Navbar
