
import React, { lazy, Suspense } from "react";
import "./App.css";

import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
import MenuAppBar from "./components/navbar/navbar";
// import EVM from "./components/EVM";
import {
  Router,
  Link,
  goBack,
  goTo,
  popToTop
} from "react-chrome-extension-router";


const Home = lazy(() => import("./page/Home/Home"));
const EVM = lazy(() => import("./page/EVM/EVM"));

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Suspense>
      <Router>
        <Home />
        {/* <Route path="/Home" element={<Home />}/>
        <Route path="/EVM" element={<EVM />}/> */}
      </Router>
      </Suspense>
      {/* <Home /> */}
    </div >
  );
}

export default App;