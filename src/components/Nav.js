import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
const [show, handleshow] = useState(false);

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleshow(true);
    } else {
        handleshow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
}, [])


    return (
        <div className={`nav ${show && 'nav_bg'}`}>
            <div className='nav_contents'>
                <h1 className='nav_logo'>Stream Flex</h1>
                <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
            </div>
        </div>
    )
}

export default Nav;
