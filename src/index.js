import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Loading from "./components/other/Loading";
import { store, persistor } from "./redux/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
