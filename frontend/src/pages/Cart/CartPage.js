import React from "react";
import { Link } from "react-router-dom";
import Price from "../../components/Price/Price";
import Title from "../../components/Title/Title";
import { useCart } from "../../hooks/useCart";
import classes from "./cartPage.module.css";
import NotFound from "../../components/NotFound/NotFound";
import { FaTrashAlt } from "react-icons/fa"; // Modern delete icon

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  return (
    <div className={classes.cartContainer}>
      <Title title="Your Shopping Cart" />

      {cart.items.length === 0 ? (
        <NotFound message="Your cart is empty! Add some items." />
      ) : (
        <div className={classes.cartContent}>
          <ul className={classes.cartList}>
            {cart.items.map((item) => (
              <li key={item.food.id} className={classes.cartItem}>
                <img src={item.food.imageUrl} alt={item.food.name} />
                <div className={classes.itemDetails}>
                  <Link to={`/food/${item.food.id}`} className={classes.itemName}>
                    {item.food.name}
                  </Link>
                  <div className={classes.itemActions}>
                    <select
                      value={item.quantity}
                      onChange={(e) => changeQuantity(item, Number(e.target.value))}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <Price price={item.price} />
                  </div>
                </div>
                <button
                  className={classes.removeButton}
                  onClick={() => removeFromCart(item.food.id)}
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>

          <div className={classes.checkoutBox}>
            <div className={classes.checkoutDetails}>
              <p>
                <span>Items:</span> {cart.totalCount}
              </p>
              <p>
                <span>Total Price:</span> <Price price={cart.totalPrice} />
              </p>
            </div>
            <Link to="/checkout" className={classes.checkoutButton}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
