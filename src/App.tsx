import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe';
import {Footer} from "./components/Footer";

function App() {
  return (
      <Routes>
          <Header />
          <main className='container content'>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About/>} />
                  <Route path='/contacts' element={<Contact/>} />
                  <Route path='/category/:name' element={<Category/>} />
                  <Route path='/meal/:id' element={<Recipe/>} />
                  <Route element={<NotFound/>} />
          </main>
          <Footer />
      </Routes>
  );
}

export default App;
