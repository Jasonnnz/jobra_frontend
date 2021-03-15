import { useState } from 'react';

function Signup({loginForm, setLoginForm, setCurrentUser, history}){
    const [ email, setEmail] = useState("")
    const [ name, setName] = useState("")
    const [ password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSignup(e){
        e.preventDefault()
        const newUser = {
            email: email,
            name: name,
            password: password
        }
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then(user => {
            if (newUser.errors){
                setErrors(newUser.errors)
            } else {
                const { user, token } = newUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/main')
            }
        })
    }

    return (
        <form onSubmit={handleSignup} className="login-form">
            <label className="auth-label" style={{color: "black"}}>SIGN UP</label><br></br><br></br>
            <input className="auth-input" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/><br></br><br></br>
            <input className="auth-input" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/><br></br><br></br>
            <input className="auth-input" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/><br></br><br></br>
            {errors.map((error) => {
                return <p className="login-error" key={error}>{error}</p>;
            })}
            <input className="login-btn" type="submit" value="Sign up"/><br></br><br></br>
            <p className="login-bottom" style={{color: "black"}}>Have an account? <span className="signup-toggle" onClick={()=>setLoginForm(!loginForm)}>Login</span></p>
        </form>
    );
}

export default Signup;
