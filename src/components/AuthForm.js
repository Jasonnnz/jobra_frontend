import Login from './Login'
import Signup from './Signup'
import { useState } from 'react';
function AuthForm({history, setCurrentUser}){
    const [loginForm, setLoginForm] = useState(true)
    return (
        <div>
            { loginForm ? <Login loginForm={loginForm} setLoginForm={setLoginForm} setCurrentUser={setCurrentUser} history={history}></Login> : 
            <Signup loginForm={loginForm} setLoginForm={setLoginForm} history={history} setCurrentUser={setCurrentUser}></Signup>}
        </div>
    );
}

export default AuthForm;
