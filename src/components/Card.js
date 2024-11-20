import React from 'react'

const Card = ({item}) => {
    console.log(item)
  return (
    <div className="product-card">
    <img src={item.product.image.src} alt={item.product.image.alt} />
    <h3>{item.product.title}</h3>
    <p>Price: Rs. {item.product.variants[0].price}</p>
    <button>Add to Cart</button>
  </div>
  )
}

export default Card
