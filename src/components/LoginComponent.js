import React, { useState } from 'react'


export const LoginComponent = () => {
    let [user, setUser] = useState('');
    let [pass, setPass] = useState('');
    let [isLoading, setLoading] = useState(false);

    const signIn = () => {
        fetch("http://localhost:8080/api/authenticate", postOptions).then(rest => rest.json()).then(res => {
            console.log("Login success");
            localStorage.setItem("jwt", res.token);
            window.location.reload();
        }).error(error => {
            setLoading(false);
        });
    }

    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user, password: pass })
    };

    return (
        isLoading ? <div>Loading...</div> :
            <div className="loginContainer">
                <h1>Sign In</h1>
                <input className="loginInput" value={user} onChange={e => setUser(e.target.value)} type="text" name="user" placeholder="User"></input>
                <input className="loginInput" value={pass} onChange={e => setPass(e.target.value)} type="password" name="pass" placeholder="Password"></input>
                <button className="loginButton" onClick={signIn}>Sign in</button>
            </div>)
}