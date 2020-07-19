import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsToShow, fetchProductsToShowSuccess } from "../../actions/actions";
import Filters from "../filters/Filters";
import Products from "../products/Products";
import style from "./Catalog.module.css";

const Catalog = () => {

  const products = useSelector(state => state.products);
  const productsToShow = useSelector(state => state.productsToShow);
  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);
  const dispatch = useDispatch();

  if (isError) {
    return <h4>Something went wrong while data loading...</h4>;
  }

  if (products === null || isLoading) {
    return <h4>Data loading....</h4>;
  }

  if(products !== null) {
    const clickChanger = e => {
      dispatch(fetchProductsToShowSuccess(products));
      console.log(productsToShow);
   };
 
   const changer = e => {
     dispatch(fetchProductsToShow(products, e.target.value));
     console.log(productsToShow);
   };
 
   return (
     <div className={style.catalog__container}>
       <div className={style.filters__container}>
         <Filters onClick={clickChanger} onChange={changer} />
       </div>
       <div className={style.products__container}>{productsToShow.map(product => (
       <Products
          key={product.id}
          src={product.image}
          price={product.amount}
          title={product.name}
          id={product.id}
       />))}
       </div>
     </div>
   );
  }

};

export default Catalog;
