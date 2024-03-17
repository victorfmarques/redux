import { createSlice } from "@reduxjs/toolkit";

const initialCartSliceState = {
    items: [],
    totalQuantity: 0,
    changed: false,
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: initialCartSliceState,
        reducers: {
            replaceCart(state, action) {
                state.totalQuantity = action.payload.totalQuantity;
                state.items = action.payload.items;
            },
            addToCart(state, action) {
                const newItem = action.payload;
                const existingItem = state.items.find(i => i.itemId === newItem.itemId)

                state.totalQuantity++;
                state.changed = true;

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
                state.changed = true;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.itemId !== itemId)
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