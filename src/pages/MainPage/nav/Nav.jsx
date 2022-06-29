import React from "react";

import "./styles.css"

const Nav = ({ onLogout }) => {

    return (
        <div className="nav">
            <h1 className="logo">RepoList</h1>
            <button className="btn-logout" onClick={onLogout}>Sair</button>
        </div>
    );
}

export default Nav