import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Novels from "./pages/Novels";
import Generate from "./pages/Generate";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Novel from "./pages/Novel";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/novel" element={<Novel />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
