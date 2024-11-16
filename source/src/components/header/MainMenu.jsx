import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="./" >Home</Link>
                    {}
                </li>
                <li className="dropdown">
                    <Link href="/about-us" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>About Us</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="./project">Portfolio</Link>
                    {}
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/blog-3-column">Blog</Link>
                   
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;