import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import classes from './Hero.module.css';
import { companyName } from '../../config';

const Hero = () => {
    return (
        <div className={classes.hero}>
            <h1>Welcome to {companyName} Services</h1>
            <p>
                You can depend on {companyName} for your home or business's HVAC needs. Contact us at any time for
                information about our HVAC services or to schedule an appointment. Our technicians can perform repairs,
                maintenance, and new system installations for any size home or business. Contact us today for a free
                estimate!
            </p>
            <span>
                <BsArrowRight /> Your comfort is our Priority!
            </span>
            <Link to="about-us">Learn more</Link>
        </div>
    );
};

export default Hero;
