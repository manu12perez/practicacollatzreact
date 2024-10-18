import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home";
import Collatz from "./Collatz";
import NotFound from "./NotFound";

function CollatzElement () {
    let {minumero} = useParams();
    return <Collatz numero={minumero} />
}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} /> */}
          <Route path="/collatz/:minumero" element={<CollatzElement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
