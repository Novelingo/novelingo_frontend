import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Novels from "./pages/Novels";
import Generate from "./pages/Generate";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import NovelDetail from "./pages/NovelDetail";
import { CurrentPageProvider } from './contexts/CurrentPageContext';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <CurrentPageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/novels/:id" element={<NovelDetail />} />

        </Routes>
      </CurrentPageProvider>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
