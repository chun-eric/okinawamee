import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, price, image, slug } = product;

  return (
    <Link to={`/products/${slug}`} className='block'>
      <div className='bg-white p-4 rounded-lg shadow'>
        <img
          src={image}
          alt={name}
          className='w-full h-64 object-cover rounded-lg max-w-[315px] max-h-[315px]'
        />
        <div className='mt-4'>
          <h3 className='text-lg font-semi-bold'>{name}</h3>
          <p className='text-gray-600'>${price}</p>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
