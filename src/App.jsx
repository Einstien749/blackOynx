import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contactus";
import Nav from "./components/nav";
import Footer from "./components/footer";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutUs />} path="/aboutus" />
        <Route element={<ContactUs />} path="/contactus" />
        <Route element={<Services />} path="/services" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
