import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Asia from "./pages/menu/Asia"

import Home from './pages/Home';
import HomeCategory from './pages/HomeCategory';
import All from './pages/All';
import Country from './pages/Country';
import CountryCategory from './pages/CountryCategory';
import City from './pages/City';
import Category from './pages/Category';
import Continent from './pages/Continent';

import Search from './pages/Search';
import SearchManual from './pages/SearchManual';

import './App.css';
import './styles/buttons.css';
import './styles/images.css';

function App() {

  const [showAsia, setShowAsia] = useState(false);

  const toggleAsia = () => {
      setShowAsia(!showAsia);
  };

  return (
    <div className="App">
      <Router>
        <Navbar toggleAsia={toggleAsia}/>

        {/* <Asia showAsia={showAsia} toggleAsia={toggleAsia} /> */}

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:homeCategory" element={<HomeCategory />} />
          <Route path="/all" element={<All />} />

          <Route path=":continent" element={<Continent />} />
          <Route path=":continent/:country" element={<Country />} />

          <Route path=":continent/:country/category/:category" element={<CountryCategory />} />

          <Route path=":continent/:country/:city" element={<City />} />
          <Route path=":continent/:country/:city/:category" element={<Category />} />

          <Route path="/search" element={<Search />} />
          <Route path="/searchmanual" element={<SearchManual />} />

          <Route path="*" element={<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "75vh"}}><h1>404 Not Found</h1></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
