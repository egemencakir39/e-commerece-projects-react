import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    if (localStorage.getItem("basketProd")) {
        return JSON.parse(localStorage.getItem("basketProd"));
    }
    return [];
}
const initialState = {
    basketProducts: getBasketFromStorage(),
    drawer: false,
    total: 0,

}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basketProd", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.basketProducts && state.basketProducts.find((product) => product.id === action.payload.id);
            if (findProduct) {
                const extractedProducts = state.basketProducts.filter((product) => product.id != action.payload.id);
                const updatedProduct = { ...findProduct, count: findProduct.count + action.payload.count };
                state.basketProducts = [...extractedProducts, updatedProduct];
                writeFromBasketToStorage(state.basketProducts);

            } else {
                state.basketProducts = [...state.basketProducts, action.payload]
                writeFromBasketToStorage(state.basketProducts);
            }

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        totalPrice: (state) => {
            state.total = state.basketProducts.reduce((acc, product) => acc + product.price * product.count, 0);
        },
        removeFromBasket: (state, action) => {
            state.basketProducts = state.basketProducts.filter((product) => product.id !== action.payload);

            writeFromBasketToStorage(state.basketProducts);
        }

    }

})

export const { addToBasket, setDrawer, totalPrice, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer