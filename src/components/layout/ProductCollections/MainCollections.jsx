import ProductCarousel from "../../common/Carousel/ProductCarousel";

const MainCollections = () => {
  // dummy data for now
  const collections = [
    {
      title: "Men's Aloha Sunset Tee",
      subtitle: "Relaxed Fit with Vibrant Sunset Colors",
      src: "/api/placeholder/800/1200",
      type: "image",
      collection: "men",
    },
    {
      title: "Women's Hibiscus Bloom Tee",
      subtitle: "Soft Fabric with Iconic Hawaiian Floral Print",
      src: "/api/placeholder/800/1200",
      type: "image",
      collection: "women",
    },
    {
      title: "Kids' Island Adventure Tee",
      subtitle: "Bright Colors and Fun Hawaiian Graphics",
      src: "/api/placeholder/800/1200",
      type: "image",
      collection: "kids",
    },
  ];
  return <ProductCarousel items={collections} />;
};

export default MainCollections;
