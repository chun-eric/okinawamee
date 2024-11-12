import PropTypes from "prop-types";

const ProductCard = ({ image, title, color, description, price }) => {
  return (
    <div className='group relative overflow-hidden bg-white'>
      <div className='relative overflow-hidden aspect-square border border-slate-900 group-hover/card:bg-black group-hover/card:scale-105 focus-within:scale-110 focus-within:bg-black'>
        <img
          src={image}
          alt={title}
          className=' w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
        />

        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 align-center justify-center  mx-auto'>
          <button
            style={{ transitionDelay: "100ms" }}
            className={`uppercase bg-white px-8 py-3 text-xs sm:text-sm lg:text-md text-black rounded  group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white inline-block font-bold 
             `}
          >
            Shop Now
          </button>
        </div>
        <div className='mt-2 w-full flex justify-between  items-start absolute bottom-2 px-4 py-2'>
          <div className='text-left '>
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
