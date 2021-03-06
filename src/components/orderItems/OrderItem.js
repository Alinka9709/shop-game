import React from 'react';
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './OrderItems.css'
import { deleteItemFromCart } from '../redux/cart/reducer';
const OrderItem = ({ game}) => {
    const dispath = useDispatch()
     
    const handleClick = () =>{
        dispath(deleteItemFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <GameCover  image={game.image}/>
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
                <div className="order-item__price">
                    <span>{game.price} руб.</span>
                    <AiOutlineCloseCircle
                    size={25}
                    className='cart-items__delete-icon'
                    onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderItem;