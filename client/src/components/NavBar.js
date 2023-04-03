import React from "react";

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
                    <NavBar.Text className="current-user">
                        <b>{`@${user.username}`}</b>
                    </NavBar.Text>
                    <button variant="info" href="/account">My Account</button>
                    <button variant="outline-info" onClick={handleLogout}>Logout</button>
                </div>
            );
        }
    }

    return (
        <div>
            <NavBar>
                <NavBar.Collapse className="justify-content-end">
                    {handleNavButtons}
                </NavBar.Collapse>
            </NavBar>
        </div>
    );
}

export default NavBar;