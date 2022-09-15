import React from 'react';
import '../Styles/TopNav.css';
import {BsSearch} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';

const TopNav = () => {
    return (
        <div id='topNavContainer'>
            <BsSearch id='topNavSearchIcon'/>
            <input type='text' id='topNavSearch' placeholder='Search by recipe name, ingredient, etc.'/>
            <div id='topNavProfile'><CgProfile/></div>
        </div>
    )
}

export default TopNav;