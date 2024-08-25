import React, { useState, useEffect } from 'react'

import data from '../data'

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

    </div>
  )
}

