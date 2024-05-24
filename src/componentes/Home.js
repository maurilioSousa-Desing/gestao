// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styleHome.css';

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/usuario">usuario</Link>
          </li>
        </ul>
      </nav>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default Home;