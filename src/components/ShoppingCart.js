import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, removeFromCart } from '../features/cartSlice';
import Cart from './cart';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { products, cart, status, error } = useSelector(state => state.cart);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    // const handleRemoveFromCart = (productId) => {
    //     dispatch(removeFromCart(productId));
    // };

    return (
        <div className='mt-20'>
            <h1 className='text-5xl text-center text-orange-600 font-bold p-2'>Products</h1>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className='grid grid-cols-5 w-full space-x-4'>
                {products.map(product => (
                    <div key={product.id} className='border border-gray-300 mt-4 p-2'>
                        <div class="flex justify-center items-center">
                        <img src={product.image} alt='image' className='w-52 h-56 '/>
                    </div>
                    <p className=' text-2xl font-semibold '>${product.price}</p>
                    <div className='h-20'>
                        <h2 className=' text-orange-400 font-semibold' >{product.title}</h2> 
                    </div> 
                        
                        <button onClick={() => handleAddToCart(product)} className='border bg-orange-500 text-white rounded-md p-2'>Add to Cart</button>
                    </div>
                ))}
            </div>
               
            {/* <h1>Shopping Cart</h1>
            <div>
                {cart.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default ShoppingCart;
