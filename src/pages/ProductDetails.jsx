import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();
  return <div>ProductDetails</div>;
};

export default ProductDetails;
