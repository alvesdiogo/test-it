// LIBs
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    pizzas: [],
    drinks: []
  },
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas.push(action.payload);
    },

    setDrinks: (state, action) => {
      state.drinks.push(action.payload);
    },

    upPastas: (state, action) => {
      let pizzas = state.pizzas;

      pizzas[action.payload.key].type = action.payload.type;

      state.pizzas = pizzas;
    },

    upSize: (state, action) => {
      let pizzas = state.pizzas;

      pizzas[action.payload.key].size = action.payload.size;

      state.pizzas = pizzas;
    },

    upIngredients: (state, action) => {
      let pizzas = state.pizzas;

      pizzas[action.payload.key].addIng[action.payload.keyChecked].check =
        action.payload.checked;

      state.pizzas = pizzas;
    },

    removePizzaId: (state, action) => {
      let pizzas = state.pizzas;

      pizzas = pizzas.filter((item) => item.name !== action.payload.name);

      state.pizzas = pizzas;
    },

    removeDrinkId: (state, action) => {
      let drinks = state.drinks;

      drinks = drinks.filter((item) => item.name !== action.payload.name);

      state.drinks = drinks;
    },

    removeProduct: (state, action) => {
      let cart = state;

      cart[action.payload.type] = cart[action.payload.type].filter(
        (item, key) => key !== action.payload.key
      );

      state = cart;
    },

    addQtProduct: (state, action) => {
      let cart = state;

      cart[action.payload.type][action.payload.key].qt++;

      state = cart;
    },

    removeQtProduct: (state, action) => {
      let cart = state;

      if (cart[action.payload.type][action.payload.key].qt > 1) {
        cart[action.payload.type][action.payload.key].qt--;
      }

      state = cart;
    }
  }
});

export const {
  setPizzas,
  setDrinks,
  upPastas,
  upSize,
  upIngredients,
  removePizzaId,
  removeDrinkId,
  removeProduct,
  addQtProduct,
  removeQtProduct
} = slice.actions;
export default slice.reducer;
