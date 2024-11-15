import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const InfiniteSlider = ({
  items,
  renderItem,
  itemWidth = 85, // Default 85% width
  gap = 16, // Default 16px gap
  className = "",
  itemClassName = "",
  transitionDuration = 300, // ms for smooth scrolling
  showScrollbar = false,
  disabled = false,
}) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Create virtual list with duplicates for smooth infinite scroll
  const virtualItems = [...items, ...items, ...items];

  useEffect(() => {
    if (scrollRef.current) {
      // Initially position at the middle set
      const slider = scrollRef.current;
      const oneSetWidth = calculateSetWidth(slider);
      slider.scrollLeft = oneSetWidth;
    }
  }, [items.length, itemWidth, gap]);

  const calculateSetWidth = (slider) => {
    const itemWidthPx = slider.offsetWidth * (itemWidth / 100) + gap;
    return itemWidthPx * items.length;
  };

  const handleScroll = () => {
    if (scrollRef.current && !isDragging && !disabled) {
      const slider = scrollRef.current;
      const oneSetWidth = calculateSetWidth(slider);

      if (slider.scrollLeft >= oneSetWidth * 2) {
        slider.scrollLeft = slider.scrollLeft - oneSetWidth;
      } else if (slider.scrollLeft < oneSetWidth) {
        slider.scrollLeft = slider.scrollLeft + oneSetWidth;
      }
    }
  };

  const handleGlobalMouseUp = () => {
    if (isDragging && !disabled) {
      setIsDragging(false);
      if (scrollRef.current) {
        const slider = scrollRef.current;
        const itemWidthPx = slider.offsetWidth * (itemWidth / 100) + gap;
        const direction = dragDistance > 0 ? -1 : 1;
        const currentScrollPosition = slider.scrollLeft;

        // Calculate the target position based on the current scroll position and drag direction
        let targetPosition = currentScrollPosition;
        const offset = currentScrollPosition % itemWidthPx;

        if (direction > 0) {
          // Moving right - snap to next item
          targetPosition = currentScrollPosition + (itemWidthPx - offset);
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

  useEffect(() => {
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging, dragDistance]);

  const handleDragStart = (e) => {
    if (disabled) return;

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
    if (!isDragging || disabled) return;
    e.preventDefault();

    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const walk = pageX - startX;
    setDragDistance(walk);

    if (scrollRef.current) {
      const slider = scrollRef.current;
      const newScrollLeft = scrollLeft - walk;
      slider.scrollLeft = newScrollLeft;

      // Check for infinite scroll during drag
      const oneSetWidth = calculateSetWidth(slider);
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
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className={`flex gap-${gap / 4} overflow-x-auto ${
          !showScrollbar ? "scrollbar-hide" : ""
        }`}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: showScrollbar ? "auto" : "none",
          msOverflowStyle: showScrollbar ? "auto" : "none",
          cursor: disabled ? "default" : isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={isDragging ? handleDragMove : null}
        onTouchMove={handleDragMove}
        onScroll={handleScroll}
      >
        {virtualItems.map((item, index) => (
          <div
            key={`${index}-${
              typeof item === "object" ? item.id || index : item
            }`}
            className={`flex-shrink-0 ${itemClassName}`}
            style={{
              width: `${itemWidth}%`,
              WebkitTapHighlightColor: "transparent",
              userSelect: "none",
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

InfiniteSlider.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemWidth: PropTypes.number,
  gap: PropTypes.number,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  transitionDuration: PropTypes.number,
  showScrollbar: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InfiniteSlider;
