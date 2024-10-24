import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import ProductDetail from '../Components/CourseDetail';

const ProductPage = () => {
  const { productId } = useParams();
  const product = courses.find((p) => p.id === parseInt(productId, 10));

  return (
    <div className="product-page">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
