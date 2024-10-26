import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import CourseDetail from '../Components/CourseDetail';

const ProductPage = () => {
  const { productId } = useParams();
  const product = courses.find((p) => p.id === parseInt(productId, 10));

  return (
    <div className="product-page">
      <CourseDetail product={product} />
    </div>
  );
};

export default ProductPage;
