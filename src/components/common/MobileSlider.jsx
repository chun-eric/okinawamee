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
  const [startX, setStartX] = useState(0); // x position coordinate when dragging in relation to current viewport position
  const [isTransitioning, setIsTransitioning] = useState(false); // tracks when to use smooth scrolling when slider jumps to the start/end of the list
  const [contentScrollPosition, setContentScrollPosition] = useState(0); // initial scroll x drag position in relation to the entire sliders content
  const [isDragging, setIsDragging] = useState(false); // tracks if currently dragging slider

  {
    /* error handing conditions */
  }
  if (!products) {
    console.log("Products is undefined or null");
    return <div>Loading...</div>;
  }

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
    setContentScrollPosition(intialScroll);
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
    setStartX(e.type.includes("mouse") ? e.pageX : e.touches[0].clientX);

    // Store the current content scroll position  relative to slider (which might be different from initialScroll)
    // this is not the mouse or touch even x axis point
    setContentScrollPosition(sliderRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {
    // if dragging isnt enabled exit
    if (!isDragging) return;

    // prevent default behavior of event etc select text, self scrolling etc...
    e.preventDefault();

    // determine current x position horizontal position of the cursor or touch point
    // a  line captures where cursor of finger is currently located horizontally
    // give x coroderinate of the first touch point
    // x is the current x position of the user moves
    const x = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;

    // startX is the x position where drag started in the handleDragStart function
    // x is the current x position of the user moves
    // 2 is the distance factor or doubles the distance
    // walk represents the total distance the slider should scroll based on how the user has dragged
    const walk = (startX - x) * 2;

    // sets the slider's scrollLeft to a new position by adding the walk to the starting scroll position
    sliderRef.current.scrollLeft = contentScrollPosition + walk;
  };

  const handleDragEnd = () => {
    // disable dragging
    setIsDragging(false);
  };

  const handleScroll = () => {
    // if slider doesnt exist or slider is currently transitioning exit
    if (!sliderRef.current || isTransitioning) return;

    // get scroll and container properties
    const scrollWidth = sliderRef.current.scrollWidth; // total width of all content inside the slider (both visible and non visible)

    const containerWidth = sliderRef.current.clientWidth; // width of the visible area of the slider

    const scrollLeft = sliderRef.current.scrollLeft; // current horizontal scroll position of the slider. Helps determing if user current position in the content is near the start or end of the content. Helps decide if a transition is needed.If scrolLeft increases, the content is being scrolled to the right direction but the content appears to the left side of the viewport. If scrollLeft decreases, the content is scrolled to the left direction but the content appears to the right side of the viewport.

    // If we've scrolled near the end or start,n jump to the corresponding position

    // check if near start of the slider content 1
    // as scrollLeft value increases the content appears to move left but we are moving to the right through the content
    // scrollWidth / 3 = width of a single set of items eg. 900px / 3 = 300px => width of a single set of items (set 1, set2, set3)
    // why do we subtract containerWidth ? to create an offset before reaching the start ->
    // Basically it is checking if scrollLeft < 0
    // scrollLeft typically cant be zero  unless for infinite loop scenario
    // simply the if condition is to detect if we are near the start of the scrollable content.
    if (scrollLeft < scrollWidth / 3 - containerWidth) {
      // transitioning is occuring
      setIsTransitioning(true);

      // Adjust scroll position by adding the width of a single set of item
      // This makes the content push to the right by a single set
      sliderRef.current.scrollLeft += scrollWidth / 3;

      // wait 50ms before setting transitioning to false
      setTimeout(() => setIsTransitioning(false), 50);
    }
    // Check if near the end of the content
    // finding the start of the last slide of a set
    // the point where where set 3 occurs
    // so if the users scrollLeft position is greater than the beginning of set 3
    else if (scrollLeft > (scrollWidth * 2) / 3) {
      // transitioning is occuring
      setIsTransitioning(true);

      // Adjust scroll position by adding the width of a single set of item
      // This makes the content push to the left by a single set
      sliderRef.current.scrollLeft -= scrollWidth / 3;
      setTimeout(() => setIsTransitioning(false), 50);
    }
  };

  return (
    <div className='w-full mb-4 cursor-pointer'>
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

export default MobileSlider;

MobileSlider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
