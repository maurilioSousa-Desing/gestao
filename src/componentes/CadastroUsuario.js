import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroUsuario() {

    const [usuario, setUsuario] = useState({
        email: '',
        nome: '',
        senha: ''
    });

    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();



    const handleChange = (e) => {

        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch('http://localhost:8080/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(usuario),
            });

            if (response.ok) {

                setMensagem('Usuario cadastrado com sucesso!');
                setUsuario({ email: '', nome: '', senha: '' });
                navigate('/usuario');
            } else {
                throw new Error('Erro ao Cadastrar Usuário');

            }
        } catch (error) {
            setMensagem(error.message);
        }

    };

    return (
        <div>
            <h2>cadastrado de Usuario</h2>
            {mensagem && <p>{mensagem}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' value={usuario.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor='nome'>Nome</label>
                    <input type='text' id='nome' name='nome' value={usuario.nome} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor='senha'>Senha</label>
                    <input type='text' id='senha' name='senha' value={usuario.senha} onChange={handleChange} required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );

}

export default CadastroUsuario;