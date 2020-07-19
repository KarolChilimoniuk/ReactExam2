import React from "react";
import { useSelector } from "react-redux";
import H1 from "../h1/H1";
import H2 from "../h2/H2";
import Products from "../products/Products";
import style from "./Home.module.css";

const Home = () => {
  const products = useSelector(state => state.products);
  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);

  if (isError) {
    return <h4>Something went wrong while data loading...</h4>;
  }

  if (products == null || isLoading) {
    return <h4>Data loading...</h4>;
  }
  
  if(products !== null) {
    const featuredDesktops = products.filter(
      product => product.featured === true && product.category === "desktop"
    );
    
    const featuredTablets = products.filter(
      product => product.featured === true && product.category === "tablet"
    );

    return (
      <div className={style.products__container}>
          <H1 name="Welcome to our Page" />
        <div className={style.category__container}>
          <H2 name="Desktops" />
          {featuredDesktops.map(product => (
            <Products
              key={product.id}
              src={product.image}
              price={product.amount}
              title={product.name}
              id={product.id}
            />
          ))}
        </div>
        <div className={style.category__container}>
          <H2 name="Tablets" />
          {featuredTablets.map(product => (
            <Products
              key={product.id}
              src={product.image}
              price={product.amount}
              title={product.name}
              id={product.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
