import { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const MobileSlider = ({
  products,
  renderItem,
  itemWidth,
  gap,
  className = "",
}) => {
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  {
    /* error handing conditions */
  }
  if (!products) {
    console.log("Products is undefined or null");
    return <div>Loading...</div>;
  }

  // it showed this error
  if (!Array.isArray(products)) {
    console.log("Products is not an array");
    return <div>Invalid data format</div>;
  }

  // if no items, return no products
  if (!Array.isArray(products) || products.length === 0) {
    return <div className='w-full py-4'>No products available</div>;
  }

  // Only create triplicatedProducts if products is valid
  // Tripling the items helps make it easier for initie scrolling
  const triplicatedProducts = [...products, ...products, ...products];
  console.log("Triplicated products length:", triplicatedProducts.length); // Verify triplication

  {
    /* Checking and initializing the scroll position */
  }

  // why do we need useEffect? only runs when component mounts and when products change.
  // initialization only occurs after component renders and DOM is ready.
  useEffect(() => {
    // check if slider element exists or not - guard clause
    if (!sliderRef.current) return;

    // Initialize scroll position, to middle set of items
    // scrollWidth measures the total width of the scrollable content including non-visible elements
    // sets initial scroll position at the beginning of the 2nd set
    // actually moves the slider position
    const intialScroll = sliderRef.current.scrollLeft / 3;
    console.log(intialScroll);

    // updates the scrollLeft state
    setScrollLeft(intialScroll);
  }, [products]);

  {
    /* handle functions */
  }
  // start tracking a drag event
  const handleDragStart = (e) => {
    // set dragging state to true aka enable drag start
    setIsDragging(true);

    // store starting point on x-axis whether mouse or touch event
    // e.pageX = x coords for mouse events
    // e.touches[0].clientX = x coords for touch events
    // save it to startX
    setStartX(e.type.includes("mouse") ? e.pageX : e.touches[0].client);

    // Store the current content scroll position  relative to slider (which might be different from initialScroll)
    // this is not the mouse or touch even x axis point
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {};

  const handleDragEnd = () => {
    // disable dragging
    setIsDragging(false);
  };

  const handleScroll = () => {};

  return (
    <div className='w-full mb-4 cursor-pointer'>
      <div
        ref={sliderRef}
        className='flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x '
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchEnd={handleDragEnd}
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
