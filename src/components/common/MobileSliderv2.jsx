import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const MobileSliderv2 = ({ products }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Create virtual list with duplicates for smooth infinite scroll
  const virtualProducts = [...products, ...products, ...products];

  // when component first loads calculates how wide one set of product is (85% width + 16px gap)
  useEffect(() => {
    if (scrollRef.current) {
      const slider = scrollRef.current;
      // offsetWidth is the width of the slider or visible area of the slider. It is 85% width + 16px gap
      // we multiply this by the number of products to get the total horizontal width of all products in the slider
      const oneSetWidth = (slider.offsetWidth * 0.85 + 16) * products.length;
      console.log("Products length", products.length);
      console.log("One set width", oneSetWidth);
      // Initially position at the middle set
      slider.scrollLeft = oneSetWidth;
    }
  }, [products.length]);

  // handles infinite scroll
  const handleScroll = () => {
    // check if slider exists and is not currently dragging
    if (scrollRef.current && !isDragging) {
      const slider = scrollRef.current;
      // the total horizontal space needed to display one full set of products in the slider
      const oneSetWidth = (slider.offsetWidth * 0.85 + 16) * products.length;
      console.log("handle scroll", oneSetWidth);

      // is mouse scrolling left, aka the content is moving left but more content is appearing to the righ, and so  the slider is >= to two sets
      if (slider.scrollLeft >= oneSetWidth * 2) {
        // go back to our original position (beginning of middle set)
        slider.scrollLeft = slider.scrollLeft - oneSetWidth;
      }
      // is mouse scrolling right, aka the content is moving right  but more content is appearing to the leftl,
      // if is less than initial position set (aka it scrolled into the first duplicate set )
      else if (slider.scrollLeft < oneSetWidth) {
        slider.scrollLeft = slider.scrollLeft + oneSetWidth;
      }
    }
  };

  // const snapToClosestItem = (slider, currentPosition) => {
  //   const itemWidth = slider.offsetWidth * 0.85 + 16;
  //   const nearestItem = Math.round(currentPosition / itemWidth);
  //   return nearestItem * itemWidth;
  // };

  // Add window-level aka global event listeners for mouse up
  // snaps the slider to the nearest product item after dragging
  useEffect(() => {
    // function triggered when user releases mouse
    const handleGlobalMouseUp = () => {
      // check if user is currently dragging
      if (isDragging) {
        // stop dragging
        setIsDragging(false);

        // check if slider exists
        if (scrollRef.current) {
          const slider = scrollRef.current;
          // width of a single product card (including margin or gap)
          const itemWidth = slider.offsetWidth * 0.85 + 16;
          // dragged right = positive value (because we are moving left to right)
          // dragged left = negative value (because we are moving right to left)
          // however when we drag right the products go in previous products direction aka -1
          // however when we drag left it goes in the normal next direction aka 1
          const direction = dragDistance > 0 ? -1 : 1;
          const currentScrollPosition = slider.scrollLeft;

          // Calculate the target position based on the current scroll position and drag direction
          // offset means how many pixels left or right into a product card
          const offset = currentScrollPosition % itemWidth;
          let targetPosition;

          // direction is positive, that means the new cards are appearing to the right
          if (direction > 0) {
            // target position is to snap to next item
            // (itemWidth - offset) = how many pixels left to snap to the next item
            targetPosition = currentScrollPosition + (itemWidth - offset);
          }
          // direction is positive, that means the new cards are appearing to the left
          else {
            // target position is to snap to the closest previous item
            targetPosition = currentScrollPosition - offset;
          }

          slider.scrollTo({
            left: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // add event listener on the global window object
    window.addEventListener("mouseup", handleGlobalMouseUp);

    // clean up function
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging, dragDistance]);

  // handles drag start
  const handleDragStart = (e) => {
    if (e.type.includes("mouse")) {
      e.preventDefault();
    }
    setIsDragging(true);
    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setStartX(pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragDistance(0);
  };

  // handles drag move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const walk = pageX - startX;
    setDragDistance(walk);

    if (scrollRef.current) {
      const slider = scrollRef.current;
      const newScrollLeft = scrollLeft - walk;
      slider.scrollLeft = newScrollLeft;

      // Check for infinite scroll during drag
      const oneSetWidth = (slider.offsetWidth * 0.85 + 16) * products.length;
      if (newScrollLeft >= oneSetWidth * 2) {
        slider.scrollLeft = newScrollLeft - oneSetWidth;
        setScrollLeft(slider.scrollLeft);
        setStartX(pageX);
      } else if (newScrollLeft < oneSetWidth) {
        slider.scrollLeft = newScrollLeft + oneSetWidth;
        setScrollLeft(slider.scrollLeft);
        setStartX(pageX);
      }
    }
  };

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        ref={scrollRef}
        className='flex gap-4 overflow-x-auto scrollbar-hide'
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={isDragging ? handleDragMove : null}
        onTouchMove={handleDragMove}
        onTouchEnd={() => setIsDragging(false)}
        onScroll={handleScroll}
      >
        {virtualProducts.map((product, index) => (
          <div
            key={`${product.title}-${index}`}
            className='w-[85%] flex-shrink-0'
            style={{
              WebkitTapHighlightColor: "transparent",
              userSelect: "none",
            }}
          >
            <ProductCard {...product} isMobileSlider={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

MobileSliderv2.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileSliderv2;
