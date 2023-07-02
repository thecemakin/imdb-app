
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

const store = setupStore();


root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);
