import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import Accueil from './containers/Accueil';
import Products from './containers/Products';
import Panier from './containers/Panier';
import AdminHome from './components/AdminHome';
import AdminStock from './components/AdminStock';
import AdminCommands from './components/AdminCommands';
import AdminUsers from './components/AdminUsers';
import NormalUserHome from './components/NormalHome';
import CreateAccount from './components/CreateAccount';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/auth" element={<Authentication />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/userHome" element={<NormalUserHome />} />
                <Route path="/adminHome" element={<AdminHome />} />
                <Route path="/admin/stock" element={<AdminStock />} />
                <Route path="/admin/commands" element={<AdminCommands />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/" element={<Accueil />} />
                <Route path="/produits" element={<Products />} />
                <Route path="/panier" element={<Panier />} />
            </Routes>
        </Router>
    );
};

export default App;
