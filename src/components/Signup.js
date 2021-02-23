import { useState } from 'react';

function Signup({loginForm, setLoginForm}){
    const [ email, setEmail] = useState("")
    const [ name, setName] = useState("")
    const [ password, setPassword] = useState("")

    return (
        <form>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <input type="submit" value="Login"/>
            <p>Have an account? <span onClick={()=>setLoginForm(!loginForm)}>Login</span></p>
        </form>
    );
}

export default Signup;