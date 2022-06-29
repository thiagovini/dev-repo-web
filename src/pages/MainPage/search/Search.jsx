import React, { useState } from "react";

import "./styles.css"

const Search = ({onSearch}) => {

    const [query, setQuery] = useState('');

    const handleClear = () => {
        setQuery('');
        onSearch('')
    }

    return (
        <div className="search">
            <input 
                type="text" 
                name="query" 
                id="query" 
                placeholder="Procurar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => onSearch(query)}>Procurar</button>
            <button onClick={handleClear}>Limpar</button>
        </div>
    );
}

export default Search;