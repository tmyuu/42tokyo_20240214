import { useParams } from 'react-router-dom';
import products from '../products.json';
import './ProductDescription.css';

function ProductDescription() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div class='product-description'>
      <h1>{product.name}</h1>
      <img src={product.image_urls[0]} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDescription;