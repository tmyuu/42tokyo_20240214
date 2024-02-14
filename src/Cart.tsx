import products from '../products.json';

interface ProductCount {
  [key: number]: number;
}

interface CartProps {
  productCounts: ProductCount;
  products: typeof products;
}

const Cart: React.FC<CartProps> = ({ productCounts, products }) => {
  // 合計金額を計算
  const totalAmount = products.reduce((acc, product) => {
    return acc + (productCounts[product.id] * product.price);
  }, 0);

  // 送料無料までの金額を計算
  const freeShippingThreshold = 8000;
  const amountUntilFreeShipping = freeShippingThreshold - totalAmount;

  return (
    <div className="cart">
      <h2>カート</h2>
      <ul>
        {products.map((product) => {
          const count = productCounts[product.id];
          const total = count * product.price;
          return (
            count > 0 && (
              <li key={product.id}>
                {product.name} × {count} = ¥{total}
              </li>
            )
          );
        })}
      </ul>
      <p>合計金額: ¥{totalAmount}</p>
      {/* 送料無料の条件付き表示 */}
      {totalAmount >= freeShippingThreshold ? (
        <p className="free-shipping">送料無料です！</p>
      ) : (
        <p className="not-free-shipping">送料無料まであと¥{amountUntilFreeShipping}です。</p>
      )}
    </div>
  );
};

export default Cart;