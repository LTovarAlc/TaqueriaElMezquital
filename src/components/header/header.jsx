import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState('20vh');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage >= 2) {
                setHeaderHeight('10vh');
            } else {
                setHeaderHeight('20vh');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header" style={{ height: headerHeight }}>
            <img src="../../../../img/TacosElMezquitalLOGO.png" className='elmezquitalLogo' />
        </header>
    );
};

export default Header;
