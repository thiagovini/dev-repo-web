import React, { useState } from "react";

import "./styles.css"
const Repositories = ({ onNewRepo }) => {

    const [newRepo, setNewRepo] = useState('');
    return (
        <div className="new">
            <input 
                type="url" 
                name="new-repo" 
                id="new-repo"
                placeholder="Novo Repositorio..."
                value={newRepo}
                onChange={ (e) => setNewRepo(e.target.value) }/>
            <button onClick={() => onNewRepo(newRepo)}>Adicionar</button>
        </div>
    );
};

export default Repositories;