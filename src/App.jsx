import { useState } from 'react'

import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Nav from "./pages/nav";
import Home from "./pages/home";
import Gallery from "./pages/gallery/gallery";
import GalleryItem from "./pages/gallery/galleryitem";
import Prints from "./pages/prints";
import Contact from "./pages/contact";
import Error from "./pages/error";


function App() {
 

  return (
    <div className="min-h-screen ">

<Routes>
        <Route path='/' element={<Nav />}>
        <Route path="/photos/:id" element={<GalleryItem />} />
          <Route index element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='prints' element={<Prints />} />
          <Route path='contact' element={<Contact />} />          
          <Route path='/' element={<Error />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
