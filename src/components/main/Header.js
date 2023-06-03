import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsTools } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

import classes from './Header.module.css';
import { companyName } from '../../config';
import Nav from './Nav';

const Header = () => {
    const navigate = useNavigate();
    const menuRef = useRef();

    const navigateHome = () => {
        navigate('/');
    };

    const toggleMenuHandler = () => {
        menuRef.current.classList.toggle(classes.hidden);
    };

    const navClasses = `${classes['nav-container']} ${classes.hidden}`;

    return (
        <header className={classes.header}>
            <button className={classes.logo} onClick={navigateHome}>
                <BsTools className={classes.icon} />
                <span>{companyName}</span>
            </button>
            <nav className={navClasses} ref={menuRef}>
                <Nav />
            </nav>
            <AiOutlineMenu className={classes.menu} onClick={toggleMenuHandler} />
        </header>
    );
};

export default Header;
