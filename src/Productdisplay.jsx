import { products } from "./dbase/ProductList";
import { useState } from "react";

function Productdisplay() {
  //console.log(products.Sterilizers.Midmark.m9.average_cost)

  const [count, setCount] = useState(0.1);

  return (
    <div className="container">
      <progress className="bg-gray-400" value={count} />
      <br />

      <button
        className="bg-sky-500 rounded p-1"
        onClick={() => {
          let counter = count + 0.1;

          if (count >= 1) {
            setCount(0);
          } else {
            setCount(counter);
          }

          console.log(count);
        }}
      >
        Hit Me! {count}
      </button>

      <button
        className="bg-red-800 rounded p-1"
        onClick={() => {
          let counter = count - 0.1;

          if (count <= 0) {
            setCount(0);
          } else {
            setCount(counter);
          }
        }}
      >
        Hit Me! {count}
      </button>
    </div>
  );
}

export default Productdisplay;
