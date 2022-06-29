import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./styles.css";

// import ImgLogo from "../../assets/imgLogin.svg"

const LoginPage = () => {
    const {login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        login(email, password)
    }
    return(
        <div className="login">

            <div className="left-login">
                <h1>Bem Vindo!</h1>
            </div>

            <div className="right-login">
                <div className="card-login">
                    <h1 className="title">Login</h1>
                    <div className="textField">
                        <label className="label" htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="btn-login" onClick={ handleLogin }>Entrar</button>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;