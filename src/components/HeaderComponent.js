import React from 'react'

export const HeaderComponent = () => {

    const logout = () => {
        localStorage.setItem("jwt", "");
        window.location.reload();
    }

    return (
        <div className="header">
            <span className="header-title">Secured API Client</span>
            <span className="header-logout"><button onClick={logout}>Log out</button></span>
        </div>
    )
}
