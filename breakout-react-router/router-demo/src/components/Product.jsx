import {useParams, useNavigate, Navigate} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  const productId = params.productId; // req.params.productId

  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);

  if (1 == 1) {
    return <Navigate to="/home" />;
  }

  // useEffect(() => {
  //   fetch(`/api/products/${productId}`)
  //     .then()
  // }, [productId]);

  return (
    <div>
      <h2>Product Detail Page #{productId}</h2>
    </div>
  );
};

export default Product;
