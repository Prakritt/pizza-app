import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartRecuder from './features/cart/CartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartRecuder,
  },
});

export default store;
