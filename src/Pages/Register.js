import React, {useState} from 'react';
import '../Styles/Register.css';
import {HiEyeOff, HiEye} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const Register = () => {

    const [state, setState] = useState({
        icon: <HiEyeOff/>
    });

    const handleShowPassword = () => {
        if(document.getElementById('registerPassword').type === 'password') {
            document.getElementById('registerPassword').type = 'text';
            setState({icon: <HiEye/>})
        }
        else {
            document.getElementById('registerPassword').type = 'password';
            setState({icon: <HiEyeOff/>})
        }
    }

    return(
        <div id='registerContainer'>
            <div id='registerRightContainer'>
                <h1 id='registerTitle'>Welcome to <br/>Cookbookz</h1>
                <form id='registerForm'>
                    <input type='name' id='registerName' placeholder='First Name'/>
                    <input type='name' id='registerNameLast' placeholder='Last Name'/>
                    <input type='name' id='registerUsername' placeholder='Username'/>
                    <input type='password' id='registerPassword' placeholder='Password'/>
                    <div id='registerPasswordIcon' onClick={handleShowPassword}>{state.icon}</div>
                    <input type='email' id='registerEmail' placeholder='Email'/>
                    <div id='registerLoginLink'>Already have a login? <Link to='/' style={{'color': 'black'}}>Login</Link></div>
                    <div id='registerButton'>Sign Up!</div>
                </form>
            </div>
        </div>
    )
}

export default Register;