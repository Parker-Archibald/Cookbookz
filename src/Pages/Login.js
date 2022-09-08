import React, {useState} from 'react';
import '../Styles/Login.css';
import {HiEyeOff, HiEye} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const Login = () => {

    const [state, setState] = useState({
        icon: <HiEyeOff/>
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

    return(
        <div id='loginContainer'>
            <div id='loginRight'>
                <h3 id='loginRightTitle'>Welcome Back!</h3>
                <form id='loginForm'>
                    <input type='username' id='loginUsername' placeholder='Username'/><br/>
                    <input type='password' id='loginPassword' placeholder='Password'/><div id='rememberMeText'>Remember Me</div>
                    <div id='passwordEyeIcon' onClick={handleReveal}>{state.icon}</div>
                    <input type='checkbox' id='rememberMeCheckbox'/>
                    <div id='registerLink'><Link to='/register' style={{color: 'black', textDecoration: 'none'}}>Register</Link></div> 
                    <div id='loginSubmitButton'>Login</div>
                </form>
            </div>
        </div>
    )
}

export default Login;