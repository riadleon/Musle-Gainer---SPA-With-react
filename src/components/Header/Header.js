import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='tittle-txt' icon={faDumbbell}></FontAwesomeIcon>
            <h2 className='tittle-txt'>Leo's Muscle Gainer</h2>
        </div>
    );
};

export default Header;