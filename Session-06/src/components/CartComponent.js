import React from 'react'

export const CartComponent = (props) => {

    // log props to see what is inside in the props-
    // console.log(props)

  return (
    <div className="cart">
    
          <div className="cart-img">
            <img src={props.data.image} alt="img" style={{width: "200px"}}/>
          </div>

          <div className="cart-text">
            <h3>{props.data.title}</h3>
            <h4>{props.data.category}</h4>
            <h4>$ {props.data.price}</h4>
            <span> <i className="fa-solid fa-star-half-stroke"></i> {props.data.rating.rate}</span>
          </div>

    </div>
  )
}
