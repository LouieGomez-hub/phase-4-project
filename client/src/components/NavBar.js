import React from "react";
import Navbar from "react-bootstrap/Navbar";

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
                <div>
                    <Navbar.Text className="current-user">
                        <b>{`@${user.username}`}</b>
                    </Navbar.Text>
                    <button variant="info" href="/account">My Account</button>
                    <button variant="outline-info" onClick={handleLogout}>Logout</button>
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