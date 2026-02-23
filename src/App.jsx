import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Aboutyou from "./components/Aboutyou";
import Assessment from "./components/Assessment";
import Loading from "./components/Loading";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home / Welcome Screen */}
        <Route path="/" element={<Home />} />

        {/* About You Page */}
        <Route path="/about" element={<Aboutyou />} />

        {/* Assessment Page */}
        <Route path="/assessment" element={<Assessment />} />

        {/* Processing / Analyzing Page */}
        <Route path="/loading" element={<Loading />} />

        {/* Result Page */}
        <Route path="/result" element={<Result />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
