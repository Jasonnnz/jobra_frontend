import { useState } from 'react';

function Login({loginForm, setLoginForm}){
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    return (
        <form>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <input type="submit" value="Login"/>
            <p>Don't have an account? <span onClick={()=>setLoginForm(!loginForm)}>Sign up</span></p>
        </form>
    );
}

export default Login;