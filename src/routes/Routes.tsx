import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

import Header from "../components/Header";
import Card from "../components/Card";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
