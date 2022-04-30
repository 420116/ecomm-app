import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isLogged: true,
    isPending: true,
    totalQuantity: 0,
    totalAmount: 0,
    showCart: false,
    products: [
      {
        id: "m1",
        image: "fake",
        description: "no products found",
        rating: {},
        title: "",
      },
    ],
  },
  reducers: {
    replaceCart(state, action) {},
    addItems(state, action) {
      const newItem = action.payload;
      const itemExist = state.items.find((item) => newItem.id === item.id);
      if (!itemExist) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
          category: newItem.category,
        });
      } else {
        itemExist.quantity++;
        itemExist.totalPrice = itemExist.totalPrice + newItem.price;
      }
      state.totalAmount = state.totalAmount + newItem.price;
      state.totalQuantity++;
    },
    removeItems(state, action) {
      const newItem = action.payload;
      const itemExist = state.items.find((item) => newItem.id === item.id);
      if (itemExist && itemExist.quantity > 2) {
        itemExist.quantity--;
        itemExist.totalPrice = itemExist.totalPrice - newItem.price;
      } else {
        state.items = state.items.filter((item) => newItem.id !== item.id);
      }
      state.totalAmount = state.totalAmount - newItem.price;
      state.totalQuantity--;
    },
    addProducts(state, action) {
      const products = action.payload;
      if (products.length > 0) {
        state.products = products;
      }
    },
    updateQuantity(state, action) {
      let item = state.products.find((item) => item.id === action.payload.id);
      if (!item.quantity) {
        item.quantity = 1;
      } else {
        item.quantity++;
      }
    },
    removeQuantity(state, action) {
      let item = state.products.find((item) => item.id === action.payload.id);
      if (item.quantity >= 2) {
        item.quantity--;
      } else {
        item.quantity = 0;
      }
    },
    showNotification(state, action) {
      state.isPending = action.payload.isPending;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
