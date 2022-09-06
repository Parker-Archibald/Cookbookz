import React from 'react';
import '../Styles/TopNav.css';
import {BsSearch} from 'react-icons/bs';

const TopNav = () => {
    return (
        <div id='topNavContainer'>
            <BsSearch id='topNavSearchIcon'/>
            <input type='text' id='topNavSearch' placeholder='Search by recipe name, ingredient, etc.'/>
        </div>
    )
}

export default TopNav;