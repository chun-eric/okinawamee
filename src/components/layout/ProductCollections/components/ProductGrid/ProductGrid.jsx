import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductGrid = ({ products }) => {
  return (
    <div className='max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-44'>
      {products.map((product) => (
        <ProductCard key={product.slug || product.id} product={product} />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductGrid;
