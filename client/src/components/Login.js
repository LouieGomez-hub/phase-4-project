import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="login-card">
            <h1>
                { showLogin ? "Welcome back" : "Create an account" }
            </h1>
            { showLogin ? <LoginForm onLogin={onLogin}/> : <Signup onLogin={onLogin}/> }
            <button onClick={() =>  setShowLogin(!showLogin)}>
                { showLogin ? "or sign up" : "or log in" }
            </button>
        </div>
    );
}

export default Login;