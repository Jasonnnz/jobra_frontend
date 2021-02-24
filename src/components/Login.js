import { useState } from 'react';

function Login({loginForm, setLoginForm, setCurrentUser, history}){
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    function handleLogin(e){
        e.preventDefault()
        const loginUser = {
            email: email,
            password: password
        }
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginUser),
          })
        .then(r => r.json())
        .then(user => {
            setCurrentUser(user)
            history.push('/main')
        })

    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <input type="submit" value="Login"/>
            <p>Don't have an account? <span onClick={()=>setLoginForm(!loginForm)}>Sign up</span></p>
        </form>
    );
}

export default Login;
