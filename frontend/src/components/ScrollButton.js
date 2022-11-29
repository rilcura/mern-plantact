import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000) {
            setVisible(true)
        }
        else if (scrolled <= 1000) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button className='d-none d-md-block'>
            <FaArrowCircleUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
}

export default ScrollButton;
