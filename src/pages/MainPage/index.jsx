import React from "react";
import "./styles.css"
import Nav from "./Nav";
import Search from "./Search"

const MainPage = () => {
    const handleLogout = () => {
        console.log('Logout')
    }

    const handleSearch = (query) => {
        console.log('query', query)
    }
    
    const handleDeleteRepo = () => {
        console.log('delete Repo')
    }

    const handleAdicionar = () => {
        console.log('Adicionar Repo')
    }
    return(
        <div id="main">
            <Nav onLogout={handleLogout}></Nav>
            <Search onSearch={handleSearch}></Search>
            <div className="repositories">
                <h2 className="title">Repositórios</h2>

                <ul className="list">
                    <li className="item">
                        <div className="info">
                            <div className="owner">facebook</div>
                            <div className="name">react</div>
                        </div>
                        <button onClick={handleDeleteRepo}>Apagar</button>
                    </li>
                    <li className="item">
                        <div className="info">
                            <div className="owner">instagram</div>
                            <div className="name">react-native</div>
                        </div>
                        <button onClick={handleDeleteRepo}>Apagar</button>
                    </li>
                </ul>

                <div className="new">
                    <label htmlFor="new-repo">Novo Repo:</label>
                    <input type="url" name="new-repo" id="new-repo"/>
                    <button onClick={handleAdicionar}>Adicionar</button>
                </div>
            </div>


        </div>

    );
}

export default MainPage