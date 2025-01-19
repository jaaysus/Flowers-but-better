import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './containers/Products';
import Panier from './containers/Panier';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Bienvenue !</h1>} />
                <Route path="/produits" element={<Products />} />
                <Route path="/panier" element={<Panier />} />
            </Routes>
        </Router>
    );
};

export default App;
