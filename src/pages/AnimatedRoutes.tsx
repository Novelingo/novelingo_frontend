import Generate1 from "../pages/Generate1";
import Generate2 from "../pages/Generate2";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Generate from "./Generate";
import Home from "./Home";
import Novels from "./Novels";
import NovelDetail from "./NovelDetail";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/novels/:id" element={<NovelDetail />} />
        <Route path="generate" element={<Generate />}>
          <Route path="generate1" element={<Generate1 />} />
          <Route path="generate2" element={<Generate2 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
