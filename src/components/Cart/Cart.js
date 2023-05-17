import React from 'react';
import './Cart.css';
import CartItem from '../Cart-Item/CartItem';

const Cart = (props) => {
    const { cart, randomSelect, removeProducts } = props;
    const { name, img } = props.randomResult;
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
                <button className='remove-btn-grad' onClick={() => removeProducts()}>Remove Items</button>
            </div>
            <div className='random-product'>
                <img src={img} alt="" />
                <h4>Choose This Product: {name}</h4>
            </div>
        </div>
    );
};

export default Cart;