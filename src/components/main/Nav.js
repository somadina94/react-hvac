import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to="about-us" className={(navData) => (navData.isActive ? classes.active : '')}>
                About Us
            </NavLink>
            <NavLink to="home-services" className={(navData) => (navData.isActive ? classes.active : '')}>
                Home Services
            </NavLink>
            <NavLink to="commercial-services" className={(navData) => (navData.isActive ? classes.active : '')}>
                Commercial Services
            </NavLink>
            <NavLink to="why-us" className={(navData) => (navData.isActive ? classes.active : '')}>
                Why Us
            </NavLink>
            <NavLink to="faq" className={(navData) => (navData.isActive ? classes.active : '')}>
                Faq
            </NavLink>
        </nav>
    );
};

export default Nav;
