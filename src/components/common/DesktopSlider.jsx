import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const DesktopSlider = ({ products }) => {
  const scrollRef = useRef(null);
  const [items, setItems] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Triple the items to create the infinite scroll effect
    // Original items + Clone at start + Clone at end
    setItems([...products, ...products, ...products]);
  }, [products]);

  const handleScroll = () => {
    if (!scrollRef.current || isScrolling) return;

    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const scrollWidth = container.scrollWidth;

    // When reaching the end (last set of items)
    if (scrollLeft + containerWidth >= scrollWidth - containerWidth) {
      setIsScrolling(true);
      container.scrollLeft = containerWidth; // Jump back to the first set
      setTimeout(() => setIsScrolling(false), 50);
    }
    // When reaching the start (scrolling backwards)
    else if (scrollLeft <= 0) {
      setIsScrolling(true);
      container.scrollLeft = scrollWidth - containerWidth * 2; // Jump to the last set
      setTimeout(() => setIsScrolling(false), 50);
    }
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container || isScrolling) return;

    const scrollAmount =
      direction === "left" ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Initialize scroll position to the first set of items
      container.scrollLeft = container.offsetWidth;
    }
  }, [items]);

  return (
    <div className='relative'>
      <div
        ref={scrollRef}
        className='flex overflow-x-auto scrollbar-hide snap-x snap-mandatory'
        style={{
          scrollBehavior: isScrolling ? "auto" : "smooth",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={handleScroll}
      >
        {items.map((product, idx) => (
          <div
            key={`${product.title}-${idx}`}
            className='min-w-full flex-shrink-0 snap-start'
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white transition-colors'
        aria-label='Previous item'
      >
        <ChevronLeft className='w-5 h-5' />
      </button>
      <button
        onClick={() => scroll("right")}
        className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white transition-colors'
        aria-label='Next item'
      >
        <ChevronRight className='w-5 h-5' />
      </button>
    </div>
  );
};

export default DesktopSlider;
