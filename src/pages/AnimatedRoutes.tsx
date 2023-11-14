import Generate1 from "./GenerateTitle";
import Generate2 from "./GenerateDes";
import Generate4 from "./GenerateGenre";
import Generate3 from "./GenerateNotes";
import Generate5 from "./GenerateLang";
import Generate6 from "./GenerateLevel";
import Generate7 from "./GeneratePreview";
import { Routes, Route, useLocation } from "react-router-dom";
import Generate from "./Generate";
import Home from "./Home";
import Novels from "./Novels";
import NovelDetail from "./NovelDetail";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/novels" element={<Novels />} />
      <Route path="/novels/:id" element={<NovelDetail />} />
      <Route path="generate" element={<Generate />}>
        <Route path="generate1" element={<Generate1 />} />
        <Route path="generate2" element={<Generate2 />} />

        <Route path="generate3" element={<Generate3 />} />
        <Route path="generate4" element={<Generate4 />} />
        <Route path="generate5" element={<Generate5 />} />
        <Route path="generate6" element={<Generate6 />} />
        <Route path="generate7" element={<Generate7 />} />
      </Route>
    </Routes>
    // </AnimatePresence>
  );
}
