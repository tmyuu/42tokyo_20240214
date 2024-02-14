import React, { useState } from 'react';
import products from '../products.json';
import './Products.css';
import Cart from './Cart.tsx';
import { Link } from 'react-router-dom';

interface ProductCount {
  [key: number]: number;
}

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <div className="slider-button left" onClick={goToPrevious}>&lt;</div>
      <img src={images[currentIndex]} alt="product" className="product-image" />
      <div className="slider-button right" onClick={goToNext}>&gt;</div>
    </div>
  );
}

const Products = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCounts, setProductCounts] = useState<ProductCount>(() =>
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {} as ProductCount)
  );

  const totalPriceMinus = (price: number, id: number) => {
    if (productCounts[id] > 0) {
      setTotalPrice(totalPrice - price);
      setProductCounts((prevCounts) => ({ ...prevCounts, [id]: prevCounts[id] - 1 }));
    }
  };

  const totalPricePlus = (price: number, id: number) => {
    setTotalPrice(totalPrice + price);
    setProductCounts((prevCounts) => ({ ...prevCounts, [id]: prevCounts[id] + 1 }));
  };

  return (
    <>
      <h1>商品一覧</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <ImageSlider images={product.image_urls} />
            <div className="product-info">
              <h2><Link to={`/product/${product.id}`} className="product-link">{product.name}</Link></h2>
              <p className="product-price">¥{product.price}</p>
              <p className="product-title">{product.title}</p>
              <div>
                <button onClick={() => totalPriceMinus(product.price, product.id)}>-</button>
                {productCounts[product.id]}
                <button onClick={() => totalPricePlus(product.price, product.id)}>+</button>
              </div>
              {product.allergie && (
                <p className="product-allergie">
                  アレルギー情報: {product.allergie.特定原材料 ? product.allergie.特定原材料.join(", ") : product.allergie.注意食品.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Cart totalPrice={totalPrice} productCounts={productCounts} products={products} />
    </>
  );
};

export default Products;
