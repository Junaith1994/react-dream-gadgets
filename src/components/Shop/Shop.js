import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // Loading products data
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    // adding product to selected products
    const [cart, setCart] = useState([]); 
    // console.log(cart);
    const addToCart = selectedItem => {
        // console.log(selectedItem);
        let newCart = [];
        if(cart) {
            newCart = [...cart, selectedItem];
            if(!cart.includes(selectedItem) && newCart.length < 5) {
                setCart(newCart);
            }
        }
    }

    // Random product selection functionality
    const [randomResult, setRandomResult] = useState([]);
    const randomSelect = () => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        if (cart[randomNumber] !== -1 && cart[randomNumber] !== undefined) {
            const randomProduct = cart[randomNumber];
            setRandomResult(randomProduct);
        }
    }

    // Product Removing functionalities
    const removeProducts = () => {
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="selected-products">
                <h2>Selected Products</h2>
                <Cart 
                cart={cart}
                randomSelect={randomSelect}
                randomResult={randomResult}
                removeProducts={removeProducts}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;