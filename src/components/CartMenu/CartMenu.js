import React from "react";
import {calsTotalPrice }from "../utils";
import Button from "../Button/Button";
import "./CartMenu.css";
import CartItem from "../CartItem/CartItem";
const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game) =>
         <CartItem 
         key={game.title}
          price={game.price} 
          title={game.title} 
          id={game.id}
          />
          ) 
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arange">
          <div className="cart-menu__total-price">
            <span>Итого: </span>
            <span>{calsTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
