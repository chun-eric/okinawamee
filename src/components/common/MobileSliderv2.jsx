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

  useEffect(() => {
    if (scrollRef.current) {
      // Initially position at the middle set
      const slider = scrollRef.current;
      const oneSetWidth = (slider.offsetWidth * 0.85 + 16) * products.length;
      slider.scrollLeft = oneSetWidth;
    }
  }, [products.length]);

  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const slider = scrollRef.current;
      const oneSetWidth = (slider.offsetWidth * 0.85 + 16) * products.length;

      if (slider.scrollLeft >= oneSetWidth * 2) {
        slider.scrollLeft = slider.scrollLeft - oneSetWidth;
      } else if (slider.scrollLeft < oneSetWidth) {
        slider.scrollLeft = slider.scrollLeft + oneSetWidth;
      }
    }
  };

  const snapToClosestItem = (slider, currentPosition) => {
    const itemWidth = slider.offsetWidth * 0.85 + 16;
    const nearestItem = Math.round(currentPosition / itemWidth);
    return nearestItem * itemWidth;
  };

  // Add window-level event listeners for mouse up
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (scrollRef.current) {
          const slider = scrollRef.current;
          const itemWidth = slider.offsetWidth * 0.85 + 16;
          const direction = dragDistance > 0 ? -1 : 1;
          const currentScrollPosition = slider.scrollLeft;

          // Calculate the target position based on the current scroll position and drag direction
          let targetPosition = currentScrollPosition;
          const offset = currentScrollPosition % itemWidth;

          if (direction > 0) {
            // Moving right - snap to next item
            targetPosition = currentScrollPosition + (itemWidth - offset);
          } else {
            // Moving left - snap to previous item
            targetPosition = currentScrollPosition - offset;
          }

          slider.scrollTo({
            left: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging, dragDistance]);

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
