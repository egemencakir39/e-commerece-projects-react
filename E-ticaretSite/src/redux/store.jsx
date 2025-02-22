import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import appReducer from './slices/appSlice.jsx';
import productReducer from './slices/productSlice.jsx';
import basketReducer from './slices/basketSlice.jsx'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedAppReducer = persistReducer(persistConfig, appReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedBasketReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
    reducer: {
        app: persistedAppReducer,
        product: persistedProductReducer,
        basket: persistedBasketReducer
    }
});

export const persistor = persistStore(store);

