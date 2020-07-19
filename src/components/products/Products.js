import React from "react";
import { addProductToCart } from "../../actions/actions"
import { useSelector, useDispatch } from "react-redux";
import style from "./Product.module.css";

const Products = ({ src, price, title, id}) => {
  const products = useSelector(state => state.products);
  const cart = useSelector(state =>state.cart);
  const dispatch = useDispatch();

  const onClick = (id) => {
     dispatch(addProductToCart(products, id));
     console.log(products);
     console.log(id);
     console.log(cart);
  }
  return (
    <div className={style.product__container}>
      <img className={style.product__image} src={src} alt="" />
      <p>{price}</p>
      <h3>{title}</h3>
      <button onClick={() => onClick(id)}>Dodaj do koszyka</button>
    </div>
  );
};

export default Products;
