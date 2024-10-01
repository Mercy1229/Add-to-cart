import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/navbar';
import AppCart from './appCart';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ShoppingCart />} />
                    <Route path="/products" element={<ShoppingCart />} />
                    {/* <Route path="/cart" element={<AppCart />} /> */}
                </Routes>
            </div>
        </Router>
            <ShoppingCart />
        </Provider>
    );
};

export default App;
