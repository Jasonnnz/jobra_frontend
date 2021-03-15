import Login from './Login'
import Signup from './Signup'
import { useState } from 'react';
import logo from '../images/jobra_logo.png'
function AuthForm({history, setCurrentUser}){
    const [loginForm, setLoginForm] = useState(true)
    return (
        <div className="grid-container-1">
            <div className="authform">
                <img src={logo} className="jobra-logo-auth" alt="Jobra Logo"/>
                {loginForm ? <Login loginForm={loginForm} setLoginForm={setLoginForm} setCurrentUser={setCurrentUser} history={history}></Login> : 
                <Signup loginForm={loginForm} setLoginForm={setLoginForm} history={history} setCurrentUser={setCurrentUser}></Signup>}
            </div>
        </div> 
    );
}

export default AuthForm;
