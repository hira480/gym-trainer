import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../images/slider/slider1.png';
import slider2 from '../../../images/slider/slider2.png';
import slider3 from '../../../images/slider/slider3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>Welcome To</h4>
                    <h3>FITNESS <span className='text-danger'>Trainer</span></h3>
                    <p>Health is Wealth.Do some physical Exercise Regularly</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Professional Gym Trainer</h3>
                    <p>If you're looking for a trainer, Contact with me</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Experienced Trainer</h3>
                    <p>
                        I will train you properly and help you to buildup your Body
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;