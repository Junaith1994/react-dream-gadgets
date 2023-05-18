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
        <div>
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
            <div className='answers'>
                <h3>1. How useState works?</h3>
                <p><strong>Ans:</strong> <strong>useState()</strong> is a React Hook that allows us to store any kind of data in the functional component, just like we can store data in javaScript variable. useState allows us to manage or update information of the component dynamically with <strong>"setState()"</strong> function and render the particular changes in the website without loading the whole site. useState returns an array with two values, one is the current initial state value and other one is a setter function which will update the state and triggers rendering.</p>
                <h3>2. Props VS State! What are the differences?</h3>
                <p><strong>Ans:</strong> 
                    <li><strong>props</strong> are read only. <strong>state</strong> changes can be asynchronous.</li>
                    <li><strong>props</strong> is immutable. <strong>state</strong> is mutable.</li>
                    <li><strong>props</strong> is external. It takes data from other components. <strong>state</strong> is internal. It takes data from inside the component.</li>
                    <li>Stateless components can have <strong>props</strong> but stateless components can not have <strong>state</strong>.</li>
                </p>
            </div>
        </div>
    );
};

export default Shop;