import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './cart';

function Navbar() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cart } = useSelector(state => state.cart);  
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <div>
            <div className='fixed top-0 w-full p-4 bg-orange-300 transition-colors duration-300' id="navbar">
                <nav className="container mx-auto flex justify-between items-center flex-row">
                    <ul id="menu" className="hidden sm:flex sm:flex-row space-x-6 text-white font-semibold text-xl">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Products">Products</a></li>
                    </ul>
                    <div className="sm:block">
                        <button onClick={toggleCart} className="text-white text-xl px-4 py-2 hover:bg-orange-300">
                            <i className="fa-solid fa-cart-shopping"></i> ({cart.length})
                        </button>
                    </div>
                </nav>
            </div>

            {/* Cart Sidebar */}
            <div className={`fixed right-0 top-0 h-full w-2/5 bg-white shadow-lg p-4 transition-transform transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button onClick={toggleCart} className="text-xl text-gray-500">&times;</button>
                </div>
                
                {/* Cart Items Component */}
                <Cart />

            </div>

            {/* Overlay when cart is open */}
            {cartOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={toggleCart}></div>}
        </div>
    );
}

export default Navbar;

