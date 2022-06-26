import React, { useState, useEffect, useContext } from "react";
import "./styles.css"
import Nav from "./Nav";
import Search from "./Search"
import Repositories from "./Repositories";
import { getRepositories, createRepository, deleteRepository } from "../../services/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const MainPage = () => {

    const { user, logout } = useContext(AuthContext);
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoging] = useState(true);
    const [loadingError, setLogingError] = useState(false);

    const loadData = async (query = '') => {
        try {
            setLoging(true)
            const response = await getRepositories(user.id, query)
            setRepositories(response.data)
            setLoging(false)
        } catch (error) {
            console.log(error)
            setLoging(false)
            setLogingError(true)
        }
    };

    useEffect(() => {
        (async () => await loadData())();
    }, []);

    const handleLogout = () => {
        logout();
    };

    const handleSearch = (query) => {
        loadData(query)
    };
    
    const handleDeleteRepo = async (repository) => {
        try {
            console.log(repository)
            await deleteRepository(repository.userId, repository._id)
            await loadData()
        } catch (error) {
            console.error(error)
            setLogingError(true)
        }

    };

    const handleNewRepo = async (url) => {
        console.log('Adicionar Repo')
        try {
            await createRepository(user?.id, url)
            await loadData()
        } catch (error) {
            console.error(error)
            setLogingError(true)
        }
    };

    if (loading) {
        return (
            <div className="loading">
                Carregando...
            </div>
        );
    }

    if (loadingError) {
        return (
            <div className="loading">
                Erro ao carregar Repositorio.
                <Link to="/login">Voltar para login</Link>
            </div>
        );
    }

    return(
        <div id="main">
            <Nav onLogout={handleLogout}></Nav>
            <Search onSearch={handleSearch}></Search>
            <Repositories 
                repositories={repositories} 
                onDeleteRepo={handleDeleteRepo} 
                onNewRepo={handleNewRepo}/>
        </div>

    );
}

export default MainPage