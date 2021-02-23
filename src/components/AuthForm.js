import Login from './Login'
import Signup from './Signup'
import { useState } from 'react';
function AuthForm({history}){
    const [loginForm, setLoginForm] = useState(true)
    return (
        <div>
            { loginForm ? <Login loginForm={loginForm} setLoginForm={setLoginForm}></Login> : <Signup loginForm={loginForm} setLoginForm={setLoginForm}></Signup>}
        </div>
    );
}

export default AuthForm;