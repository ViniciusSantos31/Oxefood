import React from "react";
import Header from "./components/Header";
import Routes from "./routes/Routes";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      {/* <Header /> */}
      <Routes />
    </div>
  );
}

export default App;
