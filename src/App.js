import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import Usuario from './componentes/Usuario';
import FrmLogin from './componentes/FrmLogin';
import CadastroUsuario from './componentes/CadastroUsuario';



function App() {
  

  // eslint-disable-next-line no-undef
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <FrmLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/frmLogin" element={<FrmLogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/frmLogin" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/frmLogin" />} />
        <Route path="/usuario" element={isAuthenticated ? <Usuario /> : <Navigate to="/frmLogin" />} />
        <Route path="/cadastrousuario" element={isAuthenticated ? <CadastroUsuario /> : <Navigate to="/frmLogin" /> } />
      </Routes>
    </Router>
  );
}

export default App;
