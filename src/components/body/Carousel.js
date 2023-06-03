import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import classes from './Carousel.module.css';
import img1 from '../../images/hvac1.jpg';
import img2 from '../../images/hvac2.jpg';
import img3 from '../../images/hvac3.jpg';
import img4 from '../../images/hvac4.jpg';
import img5 from '../../images/hvac5.jpg';
import img6 from '../../images/hvac6.jpeg';

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const imgArr = [img1, img2, img3, img4, img5, img6];

    return (
        <div className={classes.carousels}>
            <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carousel}>
                {imgArr.map((img) => (
                    <Carousel.Item className={classes['c-item']}>
                        <img className="d-block w-100 c-img" src={img} alt="First slide" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
