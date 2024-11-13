import HeroItem from "../../common/HeroItem";
import MobileSlider from "../../common/MobileSlider";
import ProductCard from "../../common/ProductCard";

const BentoCollections = () => {
  // dummy data
  const products = [
    {
      image: "https://placehold.co/400x400",
      title: "Hawaiin Orange Mode",
      color: "Natural White",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 120,
    },
    {
      image: "https://placehold.co/400x400",
      title: "Runner Go - Cozy",
      color: "Stony Cream",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 120,
    },
    {
      image: "https://placehold.co/400x400",
      title: "Lounger Lift - Cozy",
      color: "Stony Cream",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 125,
    },
    {
      image: "https://placehold.co/400x400",
      title: "Wool Runner Mizzles",
      color: "Stony Cream",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 110,
    },
  ];

  console.log("Products in BentoCollections:", products); // Debug log

  return (
    <div className='w-full h-full p-0 md:p-2'>
      {/* Desktop Layout */}
      <div className='hidden h-full md:grid grid-cols-2 gap-4'>
        <HeroItem isMobile={false} />
        <div className='grid grid-cols-2 gap-4'>
          {products.map((product, index) => (
            // {...product} is a spread operator and passes all the properties of product object as props to the ProductCard. Very useful to know.
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='md:hidden '>
        <HeroItem isMobile={true} />
        <div className='mt-4'>
          {/* Only render MobileSlider if products exist */}
          {products && products.length > 0 && (
            <MobileSlider products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCollections;
