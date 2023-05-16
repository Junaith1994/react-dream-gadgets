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
            if(!cart.includes(selectedItem)) {
                setCart(newCart);
            }
        }
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;