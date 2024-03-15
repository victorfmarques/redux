import { createSlice } from "@reduxjs/toolkit";

import CartItem from "../model/cartItemModel";

const initialCartSliceState = {
    items: [],
    totalQuantity: 0,
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: initialCartSliceState,
        reducers: {
            addToCart(state, action) {
                const newItem = action.payload;
                const existingItem = state.items.find(i => i.itemId === newItem.itemId)

                state.totalQuantity++;

                if (!existingItem) {
                    state.items.push(
                        {
                            itemId: newItem.itemId,
                            title: newItem.title,
                            quantity: 1,
                            price: newItem.price,
                            totalPrice: newItem.price
                        }
                    );
                } else {
                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
                }
            },
            removeFromCart(state, action) {
                const itemId = action.payload;
                const existingItem = state.items.find(i => i.itemId === itemId)

                state.totalQuantity--;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.itemId != itemId)
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                }
            }
        }
    }
)

export const cartActions = cartSlice.actions

export default cartSlice.reducer;