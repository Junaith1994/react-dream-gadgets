import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const {name, img} = props.item;

    return (
        <div className='item'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default CartItem;