import PropTypes from "prop-types";

const ProductCard = ({ image, title, color, price }) => {
  return (
    <div className='group relative  bg-white w-full'>
      <div className='relative  overflow-hidden md:aspect-square border border-slate-900 group-hover/card:bg-black group-hover/card:scale-105 focus-within:scale-110 focus-within:bg-black'>
        <img
          src={image}
          alt={title}
          className=' w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
        />

        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out align-center justify-center  mx-auto'>
          <button
            style={{ transitionDelay: "100ms" }}
            className={`uppercase bg-white px-8 py-3 text-xs sm:text-sm lg:text-md text-black rounded  group-hover:opacity-100 transition-all duration-200 ease-out hover:bg-primary hover:text-white inline-block font-bold 
             `}
          >
            Shop Now
          </button>
        </div>

        {/* Product Details */}
        <div className='w-full flex justify-between  items-start absolute bottom-0  left-0 right-0 px-4 py-2 '>
          <div className='text-left mb-2'>
            <p className='text-[0.85rem] font-bold mb-1'>{title}</p>
            <p className='text-gray-600 text-[0.85rem]'>{color}</p>
          </div>
          <p className='font-extralight font-poppins text-[0.9rem]'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
