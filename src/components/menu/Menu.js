import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Menu.module.css";
import shopIcon from "../../images/cart.svg";

const Menu = () => {
  const cart = useSelector(state => state.cart);
  const checkAmount = () => {
    let price = 0;
    cart.forEach(product => price += Number(product.amount))
    alert(`Ilość produktów w koszyku ${cart.length}\n
            Łączna cena: ${price.toFixed()} zł`);
  }
  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li className={style.navigation__element}>
          <NavLink className={style.navigation__link} to="/">
            Home
          </NavLink>
        </li>
        <li className={style.navigation__element}>
          <NavLink className={style.navigation__link} to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className={style.navigation__element}>
          <NavLink className={style.navigation__link} to="/about">
            About
          </NavLink>
        </li>
      </ul>
      <img src={shopIcon} className={style.shopImg} onClick={checkAmount}/>
    </nav>
  );
};

export default Menu;
