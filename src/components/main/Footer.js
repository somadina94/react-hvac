import classes from './Footer.module.css';
import { companyName } from '../../config';

const Footer = () => {
    const year = new Date(Date.now()).getFullYear();

    return (
        <div className={classes.footer}>
            <p>
                Copyright © {year} {companyName} All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
