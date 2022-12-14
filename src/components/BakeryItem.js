import React from "react";

export default function BakeryItem(props) {
  function handleClick() {
    props.setTotal(props.total + props.item.price);
    props.setCart((prevCart) => {
      let newCart = [...prevCart];
      newCart[props.index] += 1;
      return newCart;
    });
  }

  return (
    <div className="BakeryItem">
      <img src={props.item.image} alt={props.item.name} />
      <div className="BakeryTextContainer">
        <h1>{props.item.name}</h1>
        <p>Bakery Description: {props.item.description}</p>
        <div className="BakeryPriceCart">
          <p>Bakery Price: {props.item.price}</p>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
