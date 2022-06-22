import "./App.css";
import Layout from "./Layouts";
import Home from "./pages/Home.js";
import Upload from "./pages/Upload.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="upload" element={<Upload />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
