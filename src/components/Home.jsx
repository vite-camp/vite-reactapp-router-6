import React from 'react'

export const Home = () => {

  const routeToShop = () => {

  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://web-design-s3.s3.us-east-2.amazonaws.com/images/bloom/baseurl.png'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}