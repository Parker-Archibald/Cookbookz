 import React from 'react';
 import '../Styles/Categories.css';

 const Categories = () => {

    return(
        <div id='categoriesContainer'>
            <div id='categoriesTitle'>Categories</div>
            <div id='categoriesBurger'>American<br/><img href="https://www.flaticon.com/free-icons/burger" src={require('../Styles/Pictures/burger icon.png')} id='burgerIcon'/></div>
            {/* <a href="https://www.flaticon.com/free-icons/taco" title="taco icons">Taco icons created by Freepik - Flaticon</a> */}
            <div id='categoriesBurrito'>Mexican<br/><img src={require ('../Styles/Pictures/taco.png')} id='tacoIcon'/></div>
            {/* <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by BZZRINCANTATION - Flaticon</a> */}
            <div id='categoriesPizza'>Italian<br/><img src={require('../Styles/Pictures/pizza.png')} id='pizzaIcon'/></div>
            {/* <a href="https://www.flaticon.com/free-icons/chinese-food" title="chinese food icons">Chinese food icons created by Freepik - Flaticon</a> */}
            <div id='categoriesChinese'>Chinese<br/><img src={require('../Styles/Pictures/chinese-food.png')} id='chineseIcon'/></div>
            {/* <a href="https://www.flaticon.com/free-icons/ice-cream" title="ice cream icons">Ice cream icons created by Freepik - Flaticon</a> */}
            <div id='categoriesDessert'>Dessert<br/><img src={require('../Styles/Pictures/ice-cream.png')} id='dessertIcon'/></div>
            {/* <a href="https://www.flaticon.com/free-icons/rice" title="rice icons">Rice icons created by monkik - Flaticon</a> */}
            <div id='categoriesIndian'>Indian<br/><img src={require('../Styles/Pictures/curry.png')} id='indianIcon'/></div>
            {/* <a href="https://www.flaticon.com/free-icons/soup" title="soup icons">Soup icons created by photo3idea_studio - Flaticon</a> */}
            <div id='categoriesSoup'>Soup<br/><img src={require('../Styles/Pictures/soup.png')} id='soupIcon'/></div>
        </div>
    )
 }

 export default Categories;