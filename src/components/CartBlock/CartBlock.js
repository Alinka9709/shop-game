import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartMenu from "../CartMenu/CartMenu";
import { calsTotalPrice } from "../utils";
import ItemsInCart from "../itemsInCart /ItemsInCart";
import "./CartBlock.css";
import { useNavigate } from "react-router";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calsTotalPrice(items);
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate('/order')
  },[navigate])
  return (
    <div className="cart-block">
        <ItemsInCart quantity={items.length}/>
      <AiOutlineShoppingCart size={25} className="cart-block__icon"  onClick={()=> setIsCartMenuVisible(!isCartMenuVisible)}/>
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice}</span>
      ) : null}
    {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} /> }
    </div>
  );
};

export default CartBlock;
