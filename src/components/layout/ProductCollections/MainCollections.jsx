import ProductCarousel from "../../common/Carousel/ProductCarousel";

const MainCollections = () => {
  // dummy data for now
  const collections = [
    {
      title: "Men's Aloha Collection",
      subtitle: "Relaxed Fit with Vibrant Sunset Colors",
      src: "https://placehold.co/600x800",
      type: "image",
      collection: "men",
    },
    {
      title: "Women's Hibiscus Collection",
      subtitle: "Soft Fabric with Iconic Hawaiian Floral Print",
      src: "https://placehold.co/600x800",
      type: "image",
      collection: "women",
    },
    {
      title: "Kids' Island Collection",
      subtitle: "Bright Colors and Fun Hawaiian Graphics",
      src: "https://placehold.co/600x800",
      type: "image",
      collection: "kids",
    },
  ];
  return <ProductCarousel items={collections} />;
};

export default MainCollections;
