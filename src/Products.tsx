import products from '../products.json';
import './Products.css'; // CSSスタイルのインポート

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
              <p className="product-description">{product.description}</p>
              {product.sale_flag && <span className="sale-flag">販売中</span>}
              {product.new_flag && <span className="new-flag">新商品</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
