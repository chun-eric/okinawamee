import { useState, useRef } from "react";

const MoreToShopCarousel = () => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
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
      name: "Urban Glide",
      color: "Black",
      price: 135,
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Urban Glide",
      color: "Black",
      price: 135,
      image: "/api/placeholder/300/300",
    },
    {
      id: 7,
      name: "Urban Glide",
      color: "Black",
      price: 135,
      image: "/api/placeholder/300/300",
    },
    {
      id: 8,
      name: "Urban Glide",
      color: "Black",
      price: 135,
      image: "/api/placeholder/300/300",
    },
  ];

  // scroll function (left and right arrows)
  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  // handle where mouse drag started
  // records initial click and stores current scroll position
  const handleMouseDown = (e) => {
    // e.pageX is the horizontal position of the mouse when clicked
    // we subtract offsetLeft to get position relative to the slider
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    // store current scroll position when we start dragging
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // handle drag distance and scroll
  // calculates the drag distance
  // scrolls proportionally to drag distance
  const handleMouseMove = (e) => {
    // if no drag started (no startX value), return
    if (!startX) return;

    // prevent default browser dragging behavior
    e.preventDefault();

    // calculate how far we dragged from start point
    const x = e.pageX - sliderRef.current.offsetLeft;
    // calculate distance moved (2 means faster scrolling, 1 is normal)
    const walk = (x - startX) * 2;

    // update scroll position based on drag distance
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // handle drag end and clean up when user releases on mouseup or mouseleave
  const handleMouseUp = () => {
    // reset start position to null to show drag has ended
    setStartX(null);
  };

  // handle touch start
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='relative max-w-full mx-auto px-4 my-6 flex flex-col md:my-12'>
      <div className='uppercase max-screen-full font-bold mb-4 flex text-left text-lg font-inter'>
        More to Shop
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("right")}
        className='absolute md:flex -right-1 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 '
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
      <button
        onClick={() => scroll("left")}
        className='absolute md:flex -left-1 top-1/2 -translate-y-1/2 z-10 rounded-full p-2'
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
      <div
        ref={sliderRef}
        className='flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-2 '
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
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
            />
            <div className='mt-2  text-ellipsis whitespace-nowrap md:gap-5 flex-col text-left '>
              <h3 className='font-mono w-max text-lg font-bold  transition-opacity duration-200 ease-in-out '>
                {" "}
                Womens Lounger Lift
              </h3>
              <p className='font-inter text-md tex-gray-900 leading-relaxed'>
                Stony Cream
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
