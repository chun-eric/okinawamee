import { useState, useRef, useEffect } from "react";

const MoreToShopCarousel = () => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const sliderRef = useRef(null);

  // dummy data
  const products = [
    {
      id: 1,
      name: "Runner Go",
      color: "Cream White",
      price: 120,
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Sport Relay",
      color: "Navy Blue",
      price: 130,
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Comfort Runner",
      color: "Dark Red",
      price: 120,
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Daily Walker",
      color: "Light Gray",
      price: 100,
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "Urban Suede",
      color: "Suede",
      price: 130,
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Urban Purple",
      color: "Purple",
      price: 105,
      image: "/api/placeholder/300/300",
    },
    {
      id: 7,
      name: "Urban Green",
      color: "Green",
      price: 135,
      image: "/api/placeholder/300/300",
    },
    {
      id: 8,
      name: "Urban Yellow",
      color: "Yellow",
      price: 125,
      image: "/api/placeholder/300/300",
    },
  ];

  // Global Mouse up handler for smooth snapping
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      // if dragging is true
      if (isDragging) {
        // stop the dragging and set it false
        setIsDragging(false);

        // check if slider exists
        if (sliderRef.current) {
          // get the slider element store it in a variable for better access
          const slider = sliderRef.current;

          // Width of a single product card including gap
          const itemWidth = slider.offsetWidth * 0.85 + 16;

          // determine direction based on drag distance
          // dragged right = positive value (because we are moving left to right)
          // dragged left = negative value (because we are moving right to left)
          // however when we drag right the products go in previous products direction aka -1
          // however when we drag left it goes in the normal next direction aka 1
          const direction = dragDistance > 0 ? -1 : 1;
          // how far the slider has scrolled
          const currentScrollPosition = slider.scrollLeft;

          // calcuate offset from nearest snap point
          const offset = currentScrollPosition % itemWidth;
          let targetPosition;

          // Calculate target position based on direction
          if (direction > 0) {
            targetPosition = currentScrollPosition + (itemWidth - offset);
          } else {
            // snap to previous item
            targetPosition = currentScrollPosition - offset;
          }

          // smooth scroll to target Position
          slider.scrollTo({
            left: targetPosition,
            behavior: "smooth",
          });

          // update arrow visibility
          updateArrowVisibility();
        }
      }
    };
    // Function to handle mouseup event
    window.addEventListener("mouseup", handleGlobalMouseUp);

    // clean up the mouseup listener
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging, dragDistance]);

  // handles drag start
  const handleDragStart = (e) => {
    // prevent default behavior
    if (e.type.includes("mouse")) {
      e.preventDefault();
    }
    // dragging state is true
    setIsDragging(true);

    // record the start position
    // clientX is the horizontal value x coordinate of the cursor
    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    // update startX value
    setStartX(pageX);
    // update current initial scroll position from its leftmost position
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // handles drag move
  const handleDragMove = (e) => {
    // if dragging is false return
    if (!isDragging) return;
    // prevent default behavior
    e.preventDefault();

    // determine current x position horizontal position of the cursor or touch point
    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    // get the drag distance by subtracting pageX from startX // sensitivity factor of 0.8
    // walk is basically the drag distance
    const walk = (pageX - startX) * 0.8;
    // update drag distance
    setDragDistance(walk);

    // check if slider exists
    if (sliderRef.current) {
      // get the slider element and save to slider variable
      const slider = sliderRef.current;
      // get current scroll left position
      const currentScrollPosition = slider.scrollLeft;

      // Only one scroll at a time (300px) at a time
      // Add a small threshold to prevent accidental scrolls
      if (Math.abs(walk) > 50) {
        // calculate target position by adding walk to current scroll
        // positive walk value means in a negative direction
        // negative walk value means in a positive direction
        const targetPosition = currentScrollPosition + (walk > 0 ? -300 : 300);

        // calculate maximum we can scroll remaining
        // scrollWidth is total width of all content
        // clientWidth is the width of the viewport
        const maxScroll = slider.scrollWidth - slider.offsetWidth;

        // ensure we dont scroll beyond the maximum possible scroll
        const boundedPosition = Math.max(0, Math.min(targetPosition));

        // scroll to the bounded position
        slider.scrollTo({
          left: currentScrollPosition + targetPosition,
          behavior: "smooth",
        });

        // Reset the start position to prevent continuous scrolling
        // setStartX(pageX);
        // setScrollLeft(boundedPosition);
      }
    }

    updateArrowVisibility();
  };

  // function to update arrow visibility
  const updateArrowVisibility = () => {
    // check if slider exists
    if (!sliderRef.current) return;

    // get the slider element
    const slider = sliderRef.current;

    // Get scroll position and dimensions
    const scrollLeft = slider.scrollLeft; // the distance we scrolled from the left
    const scrollWidth = slider.scrollWidth; // Total width of all content
    const clientWidth = slider.clientWidth; // Visible width of the container

    const isStart = scrollLeft <= 0; // check if we are at the start
    const isEnd = scrollLeft >= scrollWidth - clientWidth - 1; // check if we are at the end

    setShowLeftArrow(!isStart); // show left arrow if start is false (not at start)
    setShowRightArrow(!isEnd); // show right arrow if end is false (not at end)
  };

  useEffect(() => {
    // Get reference to the slider element
    const slider = sliderRef.current;
    if (!slider) return;

    // Initial check for arrow visibility
    updateArrowVisibility();

    // Add event listeners
    slider.addEventListener("scroll", updateArrowVisibility);
    window.addEventListener("resize", updateArrowVisibility);

    // Clean up function
    return () => {
      slider.removeEventListener("scroll", updateArrowVisibility);
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, []);

  // scroll function (left and right arrows)
  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });

    // Update arrow visibility
    updateArrowVisibility();
  };

  return (
    <div className='relative max-w-full mx-auto px-4 my-6 flex flex-col md:my-12'>
      <div className='uppercase max-screen-full font-bold mb-4 flex text-left text-lg font-inter'>
        More to Shop
      </div>

      {/* Right arrow - hide on mobile and when at end */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className='absolute hidden md:flex -right-1 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-200 ease-in-out opacity-0 data-[show=true]:opacity-100 '
          data-show={showRightArrow}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.7}
            stroke='currentColor'
            className='size-10 bg-white border border-black  rounded-full p-2 hover:bg-primary hover:text-white hover:border-white transtion duration-300 ease-in-out  '
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      )}

      {/* Left Arrow - hide on mobile and when at start */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className='absolute hidden md:flex -left-1 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-300 ease-in-out opacity-0 data-[show=true]:opacity-100'
          data-show={showLeftArrow}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-10 bg-white border border-black rounded-full p-2 hover:bg-primary hover:text-white hover:border-white transtion duration-300 ease-in-out'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </button>
      )}
      <div
        ref={sliderRef}
        className='flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-2 '
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          transition: isDragging ? "none" : "all 0.5s ease",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className=' cursor-pointer flex-none rounded-sm items-center w-[85%] sm:w-[45%] md:w-[31%] lg:w-[23%] xl:w-[18%] snap-start '
          >
            <img
              className='h-auto w-full object-cover rounded-sm'
              src='https://placehold.co/300x300'
              alt={product.name}
              draggable='false'
            />
            <div className='mt-2  text-ellipsis whitespace-nowrap md:gap-5 flex-col text-left '>
              <h3 className='font-mono w-max text-lg font-bold  transition-opacity duration-200 ease-in-out '>
                {product.name}
              </h3>
              <p className='font-inter text-md tex-gray-900 leading-relaxed'>
                {product.color}
              </p>
              <p className='font-inter text-md tex-gray-900'>
                {" "}
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreToShopCarousel;
