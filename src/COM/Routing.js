import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Browse from '../Pages/Browse';
import Calendar from '../Pages/Calendar';
import GroceryList from '../Pages/GroceryList';
import MyFood from '../Pages/MyFood';
import MyRecipes from '../Pages/MyRecipes';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


const Routing = () => {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/groceryList' element={<GroceryList/>}/>
            <Route path='/myFood' element={<MyFood/>}/>
            <Route path='/myRecipes' element={<MyRecipes/>}/>
            <Route path='/register' element ={<Register/>}/>
        </Routes>
    )
}

export default Routing;