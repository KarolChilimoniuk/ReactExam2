export const ACTION_TYPES = {
    FETCH_PRODUCTS: "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR:  "FETCH_PRODUCTS_ERROR",
    FETCH_PRODUCTS_TO_SHOW_SUCCESS: "FETCH_PRODUCTS_TO_SHOW_SUCCESS",
    ADD_PRODUCT_TO_CART_SUCCESS: "ADD_PRODUCT_TO_CART_SUCCESS",
}

export const fetchProducts = () => ({
    type: ACTION_TYPES.FETCH_PRODUCTS
});
export const fetchProductsSuccess = (products) => ({
   type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
   products
});
export const fetchProductsError = () => ({
   type: ACTION_TYPES.FETCH_PRODUCTS_ERROR
});
export const fetchProductsData = () => {
    return async (dispatch) => {
       try {
        dispatch(fetchProducts());
        const response = await fetch('https://d24huwa7xw9s1p.cloudfront.net');
        const data = await response.json();
        const products = [...data];
        console.log(products);
        dispatch(fetchProductsSuccess(products));
       } catch(err) {
           console.log(err.message);
           dispatch(fetchProductsError());
       }
    };
}
export const fetchProductsToShowSuccess = (productsToShow) => {
    return {
        type: ACTION_TYPES.FETCH_PRODUCTS_TO_SHOW_SUCCESS,
        productsToShow
    }
}
export const fetchProductsToShow = (products, inputValue) => {
    return async (dispatch) => {
        let productsToShow = [];
        try {
            if(inputValue === "All") {
               productsToShow = [...products];
               dispatch(fetchProductsToShowSuccess(productsToShow));
            } else {
                productsToShow = await products.filter(product => {
                    if(product.manufacture.toLowerCase() === inputValue.toLowerCase()) {
                       return product;
                    } else if (product.name.toLowerCase() === inputValue.toLowerCase()) {
                       return product
                    }
                  }
                );
               dispatch(fetchProductsToShowSuccess(productsToShow));
           }
        } catch(err) {
            console.log(err.message);
        }
     };
}
export const addProductToCartSuccess = (product) => {
    return {
        type: ACTION_TYPES.ADD_PRODUCT_TO_CART_SUCCESS,
        product
    }
}
export const addProductToCart = (products, id) => {
    return async (dispatch) => {
        try {
            const newProduct = await products.find(product => product.id === id);
            console.log(newProduct);
            dispatch(addProductToCartSuccess(newProduct));
        } catch(err) {
            console.log(err.message);
        }
     };
}
