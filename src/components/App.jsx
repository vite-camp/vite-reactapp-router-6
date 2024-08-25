import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";

import data from '../data';
import { Home } from './Home';
import { ItemsList } from './ItemsList';

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export const  App =() => {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
        </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items-list" element={<ItemsList items={stock} />} />
      </Routes>

    </div>
  )
}

