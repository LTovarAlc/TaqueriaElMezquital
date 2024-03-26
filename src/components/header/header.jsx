import React, { useEffect } from 'react';
import './header.css';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const header = document.querySelector('.header');
            if (scrollPosition > window.innerHeight * 0.1) {
                header.classList.add('small-header');
            } else {
                header.classList.remove('small-header');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
        </header>
    );
};

export default Header;
