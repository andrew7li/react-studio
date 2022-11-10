import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // useState variables to hold the state of the cart
  const [cart, setCart] = useState(new Array(bakeryData.length).fill(0));
  const [total, setTotal] = useState(0);

  const formatTotal = (total) => "$" + Number(total.toFixed(2));

  return (
    <div className="App">
      <h1 className="AppHeader">My Bakery</h1>
      <div className="AppContainer">
        <div className="BakeryItemContainer">
          {bakeryData.map((item, index) => (
            <BakeryItem
              item={item}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
              index={index}
              key={index}
            />
          ))}
        </div>
        <div className="CartContainer">
          <h1>Cart</h1>
          <strong>Total: {formatTotal(total)}</strong>
          {cart.map((ele, idx) => {
            if (ele > 0) {
              return (
                <div className="CartItem">
                  {ele}x {bakeryData[idx].name}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
