import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        fetch("/login", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((user) => onLogin(user))
            } else {
                res.json().then((err) => setError(`${Object.keys(err)}: ${Object.values(err)}`))
            }
        })
    }

    return (
        <div>
            <form className="myacc" onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                {error ? <div className="errorContainer">
                    <span className="error-message">{error}</span>
                </div> : null
                }
                <button variant="info" type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;