// LIBs
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

// HOOKs
import cartReducer from "./reducers/cartReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const persistedReducerCart = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: { cart: persistedReducerCart },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
