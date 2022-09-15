import React from 'react';
import '../Styles/Homepage.css';
import Categories from '../Components/Categories';

const Homepage = () => {

    return(
        <div id='homepageContainer'>
            <div id='homepage'>
                <Categories/>
            </div>
        </div>
    )
}

export default Homepage;