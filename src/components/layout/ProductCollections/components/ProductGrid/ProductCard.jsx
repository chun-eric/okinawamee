import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null;

  const {
    name = "",
    price = "Not availabe",
    image = "",
    slug = "",
    originalPrice = (price + price * 0.2).toFixed(2),
    isBestSeller = false,
    sizes = ["XS", "S", "M", "L", "XL"],
  } = product;

  const handleQuickAdd = (size) => {
    // need to add cart functionality later here
    setSelectedSize(size);
  };

  return (
    <div
      className={`relative w-[315px]  "
      }`}
      style={{
        zIndex: isHovered ? 50 : 1,
      }}
    >
      {/* Hover Overlay */}
      {isHovered && (
        <div className='absolute inset-0 bg-white border-l border-r border-t border-b-0 border-gray-300 shadow-2xl pointer-events-none -m-8  z-5 rounded-sm'></div>
      )}
      {/* Main card container */}
      <div
        className='relative bg-white'
        style={{ zIndex: isHovered ? 101 : 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Card Content */}
        <div className={` relative z-102 bg-white `}>
          <Link to={`/products/${slug}`} className='block'>
            <div className='bg-white max-w-[315px] h-auto mb-3 overflow-hidden '>
              <div className='relative aspect-square'>
                <img
                  src={image}
                  alt={name}
                  className='w-full h-full object-cover  '
                />
                {isBestSeller && (
                  <div className='absolute bottom-4 left-3 z-10'>
                    <span className='text-xs font-bold bg-slate-50 px-2 py-1 rounded-sm font-monospace italic uppercase tracking-normal text-gray-700'>
                      Bestseller
                    </span>
                  </div>
                )}
              </div>
              <div className='mt-4'>
                <h3 className='text-sm font-inter font-bold'>{name}</h3>
                <div className='flex gap-2 items-center mt-2'>
                  <p className='text-primary text-sm  font-bold'>${price}</p>
                  {originalPrice > price && (
                    <p className='text-gray-500 line-through text-sm'>
                      ${originalPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
          {/* Quick add button - show on Hover */}
          {isHovered && (
            <div className='absolute left-0 right-0 top-full bg-white z-[103] px-6 py-1 pt-3 pb-6 mt-[0.5px] -m-8 border-l border-r border-b border-t-0  border-gray-300 shadow-2xl rounded-sm'>
              <div className='text-sm font-medium mb-2'>Quick Add</div>
              <div className='grid grid-cols-6 gap-1 mb-2'>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleQuickAdd(size)}
                    className={`border mb-2 py-2 text-center hover:bg-zinc-100 transition-colors ${
                      selectedSize === size ? "border-black" : "border-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <button
                  className='w-full py-2 bg-black text-white rounded hover:bg-secondary transition-colors'
                  onClick={() => {
                    console.log(
                      `Add cart logic here. Added size: ${selectedSize} to cart`
                    );
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    isBestSeller: PropTypes.bool.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductCard;
