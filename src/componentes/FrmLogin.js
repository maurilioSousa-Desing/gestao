import React from "react";
import './styles.css';
import { useNavigate } from 'react-router-dom';

const FrmLogin = ({ setIsAuthenticated }) => {

    const navigate = useNavigate();


    const handleLogin = () => {

        setIsAuthenticated(true);
        navigate('/home'); // Redireciona para a página inicial após login

    };

    return (
        <div class="containe">
            <div class="login-screen">
                <form class="form">
                   <h3 class="title">Acesso ao Sistema</h3>
                   <input type="email" placeholder="Email" class="inputs" />
                   <input type="password" placeholder="Password" class="inputs" />
                   <button class="btn"  onClick={handleLogin}>Login</button>
                   <a href="#">forgot your password?</a>
				   <p class="description">create account?<a href="/Usuario.js">sign up</a></p>
                </form>
            </div>
      </div>
    );

};

export default FrmLogin;

