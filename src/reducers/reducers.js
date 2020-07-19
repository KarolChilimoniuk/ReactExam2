import { ACTION_TYPES } from "../actions/actions";

const initState = {
    products: null,
    productsToShow: [],
    cart: null,
    isLoading: true,
    isError: false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_PRODUCTS:
            return {...initState}
        case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state, 
                products: action.products,
                productsToShow: action.products,
                cart: [],
                isLoading: false,
            }
        case ACTION_TYPES.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case ACTION_TYPES.FETCH_PRODUCTS_TO_SHOW_SUCCESS: {
            return {...state, productsToShow: action.productsToShow}
        }
        case ACTION_TYPES.ADD_PRODUCT_TO_CART_SUCCESS: {
            return {...state, cart: [...state.cart, action.product]}
        }
        default:
            return state;
    }
}

export default reducer;