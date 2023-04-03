import React, { useState } from "react";

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSignup(e) {
        e.preventDefault();

        fetch("/signup", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, password_confirmation })
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((user) => onLogin(user))
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form className="myacc" onSubmit={handleSignup}>
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    value={password_confirmation}
                    placeholder="Confirm password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                {errors ? <div className="errorContainer">
                    {errors.map((err) => (
                     <span className="error-message" key={err}>{`Invalid: ${err}`}</span>   
                    ))}
                </div> : null
                }
                <button variant="info" type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;