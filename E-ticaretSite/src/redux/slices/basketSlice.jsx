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
                findProduct.count += action.payload.count;
                state.basketProducts = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.basketProducts);

            } else {
                state.basketProducts = [...state.basketProducts, action.payload]
                writeFromBasketToStorage(state.basketProducts);
            }

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        }

    }

})

export const { addToBasket, setDrawer } = basketSlice.actions

export default basketSlice.reducer