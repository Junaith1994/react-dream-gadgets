import React from 'react';
import './Cart.css';
import CartItem from '../Cart-Item/CartItem';

const Cart = (props) => {
    const { cart, randomSelect, randomResult } = props;
    // console.log(randomSelect);

    return (
        <div className='cart-info'>
            {
                cart.map(item => <CartItem 
                    key={item.id} 
                    item={item}
                    ></CartItem>)
            }
            <div className='cart-btn'>
                <button className='choose-btn-grad' onClick={() => randomSelect()}>Choose Randomly</button>
                <button className='remove-btn-grad'>Remove Items</button>
            </div>
            <h4>Choose This Product: {randomResult}</h4>
        </div>
    );
};

export default Cart;