import React from 'react'

const FakeStoreCard = ({title, price, category, description, image}) => {
  return (
    <div className="card">
        <img alt="fake_store_product" src={image} />
        <h4>{title}</h4>
        <h5>{category}</h5>
        <h6>{price}</h6>
      </div>
  )
}

export default FakeStoreCard