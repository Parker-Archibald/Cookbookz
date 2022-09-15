import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Nav.css';
import {MdOutlineSpaceDashboard} from 'react-icons/md';
import {RiCompassDiscoverLine} from 'react-icons/ri';
import {MdListAlt} from 'react-icons/md';
import {MdOutlineLocalGroceryStore} from 'react-icons/md';
import {BsCalendar3} from 'react-icons/bs';
import {MdOutlineFastfood} from 'react-icons/md';
import {FiLogOut} from 'react-icons/fi';

const Nav = () => {

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false')
        setTimeout("document.location.reload(true)", 400);
    }

    return(
        <div id='navContainer'>
            <h2 id='appTitle'>Cookbookz</h2>
            <div id='navDiscoverText'>Discover</div>
            <div id='homepageLink'><Link to='/' style={{textDecoration: 'none', color: 'white'}}><MdOutlineSpaceDashboard id='homeIcon'/><span id='homeLinkText'>Home</span></Link></div>
            <div id='browseLink'><Link to='/browse' style={{textDecoration: 'none', color: 'white'}}><RiCompassDiscoverLine id='browseIcon'/><span id='browseLinkText'>Browse</span></Link></div>
            <div id='navPersonalText'>Personal</div>
            <div id='myRecipesLink'><Link to='/myRecipes' style={{textDecoration: 'none', color: 'white'}}><MdListAlt id='myRecipesIcons'/><span id='myRecipesText'>My Recipes</span></Link></div>
            <div id='groceryLink'><Link to='/groceryList' style={{textDecoration: 'none', color: 'white'}}><MdOutlineLocalGroceryStore id='groceryIcon'/><span id='groceryLinkText'>Grocery List</span></Link></div>
            <div id='calendarLink'><Link to='/calendar' style={{textDecoration: 'none', color: 'white'}}><BsCalendar3 id='calendarIcon'/><span id='calendarLinkText'>Calendar</span></Link></div>
            <div id='myFoodLink'><Link to='/myFood' style={{textDecoration: 'none', color: 'white'}}><MdOutlineFastfood id='myFoodIcon'/><span id='myFoodText'>My Food</span></Link></div>
            <div id='navLogout' onClick={handleLogout}><FiLogOut id='logoutIcon'/><Link to='/' style={{'color': 'white', 'textDecoration': 'none'}}><span id='logoutText'>Logout</span></Link></div>
        </div>
    )
}

export default Nav;