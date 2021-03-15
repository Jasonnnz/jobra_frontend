import { useState } from 'react';

function Login({loginForm, setLoginForm, setCurrentUser, history}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

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
        .then((loggedUser) => {
            if (loggedUser.errors){
                setErrors(loggedUser.errors)
            } else {
                const { user, token } = loggedUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/main')
            }
        })

    }

    return (
        <form onSubmit={handleLogin} autoComplete="off" className="login-form">
            <label className="auth-label" style={{color: "black"}}>Log in to Jobra</label><br></br><br></br>
            <input className="auth-input" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/><br></br><br></br>
            <input className="auth-input" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/><br></br><br></br>
            {errors.map((error) => {
                return <p className="login-error" key={error}>{error}</p>;
            })}
            <input className="login-btn" type="submit" value="Log in"/><br></br><br></br>
            <p className="login-bottom" style={{color: "black"}}>Don't have an account? <span className="signup-toggle"onClick={()=>setLoginForm(!loginForm)}>Sign up</span></p>
        </form>
    );
}

export default Login;
