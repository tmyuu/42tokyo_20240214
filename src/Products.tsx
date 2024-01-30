import products from '../products.json';
import './Products.css';

function Products() {
  return (
    <>
      <h1>商品一覧</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_urls[0]} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">¥{product.price}</p>
              <p className="product-title">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
