import { Fragment } from 'react';

import Hero from '../body/Hero';
import Job from '../body/Job';
import ImageCarousel from '../body/Carousel';
import Contact from '../body/Contact';
import Address from '../body/Address';

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Job />
            <ImageCarousel />
            <Contact />
            <Address />
        </Fragment>
    );
};

export default Home;
