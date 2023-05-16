import React from 'react';
import './Cart.css';
import CartItem from '../Cart-Item/CartItem';

const Cart = (props) => {
    const {cart} = props;

    return (
        <div className='cart-info'>
            {
                cart.map(item => <CartItem 
                    key={item.id} 
                    item={item}
                    ></CartItem>)
            }
            <div className='cart-btn'>
                <button className='choose-btn-grad'>Choose Randomly</button>
                <button className='remove-btn-grad'>Remove Items</button>
            </div>
        </div>
    );
};

export default Cart;