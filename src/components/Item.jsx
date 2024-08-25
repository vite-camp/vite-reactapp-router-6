import React from 'react'
import { useParams } from "react-router-dom";

export const Item = (props) => {
  const { items } = props
  const { itemID } = useParams();

  if (!items.length) return "SUCKER I WON!";
  const item = items.find(item => item.id === parseInt(itemID));

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

    </div>
  )
}
