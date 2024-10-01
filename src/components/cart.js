// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {  removeFromCart } from '../features/cartSlice';
// export default function Cart(){
//     const dispatch = useDispatch();
//     const {  cart } = useSelector(state => state.cart);
//     const handleRemoveFromCart = (productId) => {
//         dispatch(removeFromCart(productId));
//     };
//     return(
//         <div>
//             <h1>Shopping Cart</h1>
//             <div className='flex flex-col w-full'>
//                 {cart.map(item => (
//                     <div key={item.id} className='flex flex-row space-x-10 w-full mb-3'>
//                         <div className='w-28'>
//                             <img src={item.image} className='h-28'/>
//                         </div>
//                         <h2 className='text-lg text-orange-500 my-auto'>{item.title}</h2>
//                         <p className='font-bold my-auto text-xl'>${item.price}</p>
                       
//                         <button onClick={() => handleRemoveFromCart(item.id)} className='border bg-orange-500 text-white rounded-md p-2 h-12 w-28 my-auto'>Remove</button>
                        
//                     </div>
//                 ))}
//             </div>
//         </div>
        
//     )
// }
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    const handleRemoveFromCart = (productId) => {
        console.log("Removing product with ID:", productId); // For debugging
        dispatch(removeFromCart(productId));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className='flex flex-col w-full'>
                {cart.map(item => (
                    <div key={item.id} className='flex flex-row space-x-10 w-full mb-3'>
                        <div className='w-28'>
                            <img src={item.image} className='h-28'/>
                        </div>
                        <h2 className='text-lg text-orange-500 my-auto'>{item.title}</h2>
                        <p className='font-bold my-auto text-xl'>${item.price}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)} className='border bg-orange-500 text-white rounded-md p-2 h-12 w-28 my-auto'>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
