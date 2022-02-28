import React from 'react';
import { useSelector } from 'react-redux';
import { calsTotalPrice } from '../../components/utils';
import OrderItem from '../../components/orderItems/OrderItem';
import './OrderPage.css'
const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    if(items.lengh < 1) {
        return <h1>Ваша корзина пуста</h1>
    }
    return (
        <div className='order-page'>
            <div className="order-page-left">
                {items.map(game=> <OrderItem game={game} />)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                  {items.lengh} товаров на сумму {calsTotalPrice(items)} руб.
                  </span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;