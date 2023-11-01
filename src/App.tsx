import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import { CurrentPageProvider } from "./contexts/CurrentPageContext";

import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CurrentPageProvider>
          <Navbar />
          <AnimatedRoutes />
        </CurrentPageProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
