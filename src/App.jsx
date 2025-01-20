import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import Accueil from './components/Accueil';
import Products from './containers/Products';
import Panier from './containers/Panier';
import Admin from './components/Admin';
import CreateAccount from './components/CreateAccount';



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/produits" element={<Products />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
};

export default App;
