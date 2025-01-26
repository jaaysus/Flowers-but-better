import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import Accueil from './containers/Accueil';
import Products from './containers/Products';
import Panier from './containers/Panier';
import AdminHome from './components/AdminHome';
import AdminStock from './containers/AdminStock';
import AdminOrders from './containers/AdminOrders';
import AdminUsers from './containers/AdminUsers';
import NormalUserHome from './components/NormalHome';
import CreateAccount from './components/CreateAccount';
import Account from './containers/Account';
import Footer from './components/Footer';



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Flowers-but-better/auth" element={<Authentication />} />
                <Route path="/Flowers-but-better/create-account" element={<CreateAccount />} />
                <Route path="/Flowers-but-better/userHome" element={<NormalUserHome />} />
                <Route path="/Flowers-but-better/adminHome" element={<AdminHome />} />
                <Route path="/Flowers-but-better/admin/stock" element={<AdminStock />} />
                <Route path="/Flowers-but-better/admin/orders" element={<AdminOrders />} />
                <Route path="/Flowers-but-better/admin/users" element={<AdminUsers />} />
                <Route path="/Flowers-but-better/" element={<Accueil />} />
                <Route path="/Flowers-but-better/produits" element={<Products />} />
                <Route path="/Flowers-but-better/panier" element={<Panier />} />
                <Route path="/Flowers-but-better/acc" element={<Account />} />

            </Routes>
            <Footer />

        </Router>
    );
};

export default App;
