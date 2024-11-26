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
    // originalPrice = price + price * 0.2,
    isBestSeller = false,
    sizes = ["S", "M", "L", "XL"],
  } = product;

  const handleQuickAdd = (size) => {
    // need to add cart functionality later here
    setSelectedSize(size);
  };

  return (
    <div
      className='relative group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${slug}`} className='block'>
        <div className='bg-white max-w-[315px] pb-4 overflow-hidden shadow'>
          <div className='relative aspect-square'>
            {isBestSeller && (
              <div className='absolute bottom-2 left-2 z-10'>
                <span className='text-xs font-bold bg-slate-50 px-2 py-1 rounded-sm font-monospace italic uppercase tracking-normal text-gray-700'>
                  Bestseller
                </span>
              </div>
            )}
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover  '
            />
            <div className='mt-4'>
              <h3 className='text-sm font-inter font-bold'>{name}</h3>
              <div className='flex gap-2 items-center'>
                <p className='text-primary text-sm font-bold'>${price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Quick add button - show on Hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg transition-all duration-200 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        } `}
      >
        <div className='text-sm font-medium mb-2'>Quick Add</div>
        <div className='grid grid-cols-6 gap-1 mb-2'>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleQuickAdd(size)}
              className={`border py-2 text-center hover:bg-zinc-100 transition-colors ${
                selectedSize === size ? "border-black" : "border-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {selectedSize && (
          <button
            className=''
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
