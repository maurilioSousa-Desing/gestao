// src/components/Contact.js
import React, { useEffect, useState } from 'react';
import './styleUsuario.css';
import headerImage from '../imagens/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        // Função para buscar os dados de usuários
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/usuarios');
                if (!response.ok) {
                    throw new Error('Erro ao buscar usuários');
                }
                const data = await response.json();
                setUsuarios(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []); // O array vazio [] faz com que o useEffect rode apenas uma vez, quando o componente monta

    const handleClick = () => {
        
        navigate('/cadastroUsuario');
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
      <div>
        <img src={headerImage} alt="Header" style={{ width: '100%', height: '200px' }} />
      <h3>Usuários Cadastrados</h3>
      
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Senha</th>
                  <th>Opcao</th>
              </tr>
          </thead>
          <tbody>
              {usuarios.map(usuario => (
                  <tr key={usuario.id}>
                      <td>{usuario.id}</td>
                      <td>{usuario.nome}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.senha}</td>
                      <td><button onClick={handleClick}>Novo</button></td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
    );
};

export default Usuario;