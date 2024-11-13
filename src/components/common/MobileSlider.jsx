import { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const MobileSlider = ({ products }) => {
  console.log(products);

  const scrollRef = useRef(null);
  const [items, setItems] = useState([]);
  // const [startX, setStartX] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);

  // Triple the items to create the infinite scroll effect and only if
  // products are available in array form and more than one item

  if (!products) {
    console.log("Products is undefined or null");
    return <div>Loading...</div>;
  }

  // it showed this error
  if (!Array.isArray(products)) {
    console.log("Products is not an array");
    return <div>Invalid data format</div>;
  }

  // Only create triplicatedProducts if products is valid
  const triplicatedProducts = [...products, ...products, ...products];
  console.log("Triplicated products length:", triplicatedProducts.length); // Verify triplication

  // if no items, return no products
  if (!Array.isArray(products) || products.length === 0) {
    return <div className='w-full py-4'>No products available</div>;
  }

  return (
    <div className='w-full mb-4'>
      <div
        className='flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x '
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {triplicatedProducts.map((product, index) => (
          <div
            key={index}
            className='w-[calc(80%-8px)] flex-shrink-0 snap-start'
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSlider;

MobileSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
