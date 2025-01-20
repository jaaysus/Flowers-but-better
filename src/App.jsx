import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import Accueil from './containers/Accueil';
import Products from './containers/Products';
import Panier from './containers/Panier';
import AdminHome from './components/AdminHome';
import NormalUserHome from './components/NormalHome';
import CreateAccount from './components/CreateAccount';



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/userHome" element={<NormalUserHome />} />
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/produits" element={<Products />} />
                <Route path="/panier" element={<Panier />} />
            </Routes>
        </Router>
    );
};

export default App;
