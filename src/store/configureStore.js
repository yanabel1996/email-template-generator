import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templateReducer";

export default configureStore({
  reducer: {
    templateReducer,
  },
});
