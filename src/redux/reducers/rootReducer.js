import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import globalReducer from "./globalReducer";
import shopReducer from "./shopReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
	cartReducer,
	globalReducer,
	shopReducer,
	wishlistReducer
});

export default rootReducer;
