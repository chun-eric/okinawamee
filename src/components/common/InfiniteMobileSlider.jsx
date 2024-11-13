import { useRef, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const InfiniteMobileSlider = ({
  products,
  renderItem,
  itemWidth,
  gap,
  className = "",
}) => {
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0); // stores initial x coordinate when dragging starts
  const [isTransitioning, setIsTransitioning] = useState(false); // tracks when to use scroll scrolling when slider jumps to the beginng/end of the list again
  const [scrollLeft, setScrollLeft] = useState(0); // tracks inital scroll position of slider when user first starts dragging
  const [isDragging, setIsDragging] = useState(false); // tracks if currently dragging slider

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
  useEffect(() => {
    if (!sliderRef.current) return;

    // Initialize scroll position to show the middle set of items
    const initialScroll = sliderRef.current.scrollWidth / 3;
    sliderRef.current.scrollLeft = initialScroll;
    setScrollLeft(initialScroll);
  }, [items]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type.includes("mouse") ? e.pageX : e.touches[0].clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    const walk = (startX - x) * 2;
    sliderRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!sliderRef.current || isTransitioning) return;

    const scrollWidth = sliderRef.current.scrollWidth;
    const containerWidth = sliderRef.current.clientWidth;
    const scrollLeft = sliderRef.current.scrollLeft;

    // If we've scrolled near the end or start, jump to the corresponding position
    // in the middle set of items
    if (scrollLeft < scrollWidth / 3 - containerWidth) {
      setIsTransitioning(true);
      sliderRef.current.scrollLeft += scrollWidth / 3;
      setTimeout(() => setIsTransitioning(false), 50);
    } else if (scrollLeft > (scrollWidth * 2) / 3) {
      setIsTransitioning(true);
      sliderRef.current.scrollLeft -= scrollWidth / 3;
      setTimeout(() => setIsTransitioning(false), 50);
    }
  };

  return (
    <div className='w-full mb-4'>
      <div
        ref={sliderRef}
        className='flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x '
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onScroll={handleScroll}
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

export default InfiniteMobileSlider;

InfiniteMobileSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
