import React, { useState, useRef } from "react";

const ProductCarousel = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches?.[0]?.pageX || 0);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches?.[0]?.pageX || 0;
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className='w-full h-[calc(100vh-80px)] lg:h-[600px]'>
      <div className='w-full h-full relative'>
        {/* Desktop View (> 992px) */}
        <div className='hidden lg:grid lg:grid-cols-3 w-full h-full'>
          {items?.map((item, index) => (
            <div
              key={index}
              className='relative w-full h-full border-r border-gray-200 last:border-r-0'
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover'
                  src={item.src}
                />
              ) : (
                <img
                  src={item?.src || "/api/placeholder/800/1200"}
                  alt={item?.title || "Product image"}
                  className='w-full h-full object-cover'
                />
              )}

              <div className='absolute inset-0 flex flex-col justify-between p-6 bg-black/10'>
                <div className='text-white'>
                  <h2 className='text-2xl font-semibold'>{item?.title}</h2>
                  <p className='mt-2'>{item?.subtitle}</p>
                </div>

                <div className='flex gap-2'>
                  <button className='w-1/2 bg-white py-3 text-sm font-medium'>
                    SHOP MEN
                  </button>
                  <button className='w-1/2 bg-white py-3 text-sm font-medium'>
                    SHOP WOMEN
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel (≤ 992px) */}
        <div
          ref={carouselRef}
          className='lg:hidden w-full h-full overflow-x-auto snap-x snap-mandatory select-none'
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className='flex w-full h-full'>
            {items?.map((item, index) => (
              <div
                key={index}
                className='min-w-full sm:min-w-full h-full flex-shrink-0 snap-center'
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className='relative w-full h-full border-r border-gray-200 last:border-r-0'>
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-cover'
                      src={item.src}
                    />
                  ) : (
                    <img
                      src={item?.src || "/api/placeholder/800/1200"}
                      alt={item?.title || "Product image"}
                      className='w-full h-full object-cover'
                    />
                  )}

                  <div className='absolute inset-0 flex flex-col justify-between p-6 bg-black/10'>
                    <div className='text-white'>
                      <h2 className='text-2xl font-semibold'>{item?.title}</h2>
                      <p className='mt-2'>{item?.subtitle}</p>
                    </div>

                    <div className='flex gap-2'>
                      <button className='w-1/2 bg-white py-3 text-sm font-medium'>
                        SHOP MEN
                      </button>
                      <button className='w-1/2 bg-white py-3 text-sm font-medium'>
                        SHOP WOMEN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
