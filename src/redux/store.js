// ================ toolkit ==========================
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import axios from "axios";

// const customMiddleware = (store) => (next) => (action) => {
//   console.log("action :>> ", action);
//   if (action.type === "users/addUser") {
//     axios.post(`https://shopbc8-30b11-default-rtdb.firebaseio.com/carts.json`, {
//       products: JSON.parse(localStorage.getItem("cart")),
//     });
//   }
//   return next(action);
// };

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "development",
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // .concat(customMiddleware),
});

persistStore(store);

export default store;

// ================ redux ==========================

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";

// // const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// const persistStore = (store) => {

//   store.getState()

// };

// console.dir(store);

// console.dir(window);

// const getData = () => {
//   const x = 5;
//   return () => {
//     console.log(x);
//   };
// };

// const newF = getData();
// newfF();
// newfF();
