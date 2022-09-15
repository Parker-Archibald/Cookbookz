import React, {useState} from 'react';
import '../Styles/Login.css';
import {HiEyeOff, HiEye} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const Login = () => {

    const [state, setState] = useState({
        icon: <HiEyeOff/>,
        setEmail: 'test@test.com',
        setPassword: 'test',
        email: '',
        password: ''
    });

    const handleReveal = () => {
        if(document.getElementById('loginPassword').type === 'password') {
            document.getElementById('loginPassword').type = 'text';

            setState({icon: <HiEye/>});
        }
        else {
            document.getElementById('loginPassword').type = 'password';
            setState({icon: <HiEyeOff/>});
        }
    }

    const handleInputChange = (e) => {
        setState(previousData => {
            return {...previousData, [e.target.name]: e.target.value}
        })
    }

    const handleLogin = () => {
        if(state.setEmail === state.email && state.setPassword === state.password) {
            localStorage.setItem('isLoggedIn', 'true');
            setTimeout("document.location.reload(true)", 400);
        }
        else {
            alert('Invalid login')
        }
    }

    return(
        <div id='loginContainer'>
            <div id='loginRight'>
                <h3 id='loginRightTitle'>Welcome Back!</h3>
                <form id='loginForm'>
                    <input type='username' id='loginUsername' placeholder='Username' name='email' onChange={handleInputChange}/><br/>
                    <input type='password' id='loginPassword' placeholder='Password' name='password' onChange={handleInputChange}/><div id='rememberMeText'>Remember Me</div>
                    <div id='passwordEyeIcon' onClick={handleReveal}>{state.icon}</div>
                    <input type='checkbox' id='rememberMeCheckbox'/>
                    <div id='registerLink'><Link to='/register' style={{color: 'black', textDecoration: 'none'}}>Register</Link></div> 
                    <div id='loginSubmitButton' onClick={handleLogin}>Login</div>
                </form>
            </div>
        </div>
    )
}

export default Login;