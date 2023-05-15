import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, price} = props.product;
    // console.log();
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='add-btn btn-grad'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;