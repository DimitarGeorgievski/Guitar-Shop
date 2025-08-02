import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { DescriptionPage } from "./Pages/DescriptionPage/DescriptionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<ProductPage />} />
      <Route path="/:id/:guitarId" element={<DescriptionPage />} />
    </Routes>
  );
}

export default App;
