import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='mt-5 text-center'>
            <p><small>Copyright © {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;