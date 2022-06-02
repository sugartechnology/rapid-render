import React from "react";

import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import {

  Routes

} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}>

          <Route path="blogs" element={<About />} />
          <Route path="contact" element={<About />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
