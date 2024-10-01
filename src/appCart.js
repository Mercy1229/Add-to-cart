import React from "react";
import Cart from "./components/cart";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
function  AppCart(){
    return(
        <Provider store={store}>
            <Cart />
        </Provider>
    )
}
export default AppCart;