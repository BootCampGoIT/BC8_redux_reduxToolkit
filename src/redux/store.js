// ================ toolkit ==========================
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "development",
  devTools: process.env.NODE_ENV !== "production",
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
