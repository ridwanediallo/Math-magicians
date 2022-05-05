import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/quote" element={<Quotes />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
    <Footer />
  </>
);

export default App;
