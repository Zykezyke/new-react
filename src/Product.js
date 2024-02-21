import { useState } from "react";
import motorcycles from "./data";
import "@fortawesome/fontawesome-free/css/all.css";

function Product({ motorcycles }) {
  const sellingPrice =
    motorcycles.price > 20000 ? motorcycles.price * 0.9 : motorcycles.price;
  const [IsFav, setIsFav] = useState(false);
  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          {motorcycles.quantity == 0 ? (
            <label className="stock bg-danger">Out of Stock</label>
          ) : (
            <label className="stock bg-success">In Stock</label>
          )}
          <img src={motorcycles.picture} alt={motorcycles.name} />
        </div>
        <div className="product-card-body">
          <p className="product-brand">{motorcycles.brand}</p>
          <h5 className="product-name">
            <a href="#">{motorcycles.name}</a>
          </h5>
          <div>
            <span className="selling-price">${motorcycles.price}</span>$
            {sellingPrice}
          </div>
          <div className="mt-2">
            <button className="btn btn1">Add To Cart</button>
            <button className="btn btn1" onClick={() => setIsFav(!IsFav)}>
              {IsFav ? (
                <i className="fa fa-solid fa-heart"></i>
              ) : (
                <i className="fa fa-regular fa-heart"></i>
              )}
            </button>
            <a href="#" className="btn btn1">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
