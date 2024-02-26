import { useState, useEffect } from "react";
import motorcycles from "./data";
import "@fortawesome/fontawesome-free/css/all.css";

function Product({ motorcycles }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === motorcycles.pictures.length - 1 ? 0 : prevIndex + 1,
        );
      }
    }, 5000); // 5 seconds interval for automatic scrolling

    return () => clearTimeout(timer);
  }, [currentImageIndex, isPaused, motorcycles.pictures.length]);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % motorcycles.pictures.length,
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? motorcycles.pictures.length - 1 : prevIndex - 1,
    );
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const sellingPrice =
    motorcycles.price > 20000 ? motorcycles.price * 0.9 : motorcycles.price;
  const [IsFav, setIsFav] = useState(false);

  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          {motorcycles.quantity === 0 ? (
            <label className="stock bg-danger">Out of Stock</label>
          ) : (
            <label className="stock bg-success">In Stock</label>
          )}
          <img
            src={motorcycles.pictures[currentImageIndex]}
            alt={motorcycles.name}
          />
          <div className="carousel-indicators">
            {motorcycles.pictures.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
        <div className="product-card-body">
          <div className="p-1 d-flex justify-content-between">
            <button onClick={handlePrevImage} className="btn btn1">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={handlePause} className="btn btn1">
              {isPaused ? (
                <i className="fas fa-play"></i>
              ) : (
                <i className="fas fa-pause"></i>
              )}
            </button>
            <button onClick={handleNextImage} className="btn btn1">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
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
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
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
