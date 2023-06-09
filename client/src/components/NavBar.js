import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE',
        })
        .then((res) => {
            if(res.ok) {
                setUser(null);
            }
        })
        .then(<redirect to="/" />)
    }

    function handleNavButtons() {
        if(user) {
            return (
                <div className="navInfo">
                    <Navbar.Text className="current-user">
                        <b>{`@${user.username}`}</b>
                    </Navbar.Text>
                    <Link className="accbtn" to="/account">My Account</Link>
                    <br/>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </div>
            );
        }
    }

    return (
        <div>
            <Navbar>
                <Navbar.Collapse className="justify-content-end">
                    {handleNavButtons()}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;