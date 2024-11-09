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

  // function to create infinite items
  const createInfiniteItems = (items) => {
    // Get copy of last item in the array
    const lastItem = items[items.length - 1];
    // Get copy of first item in the array
    const firstItem = items[0];

    // return new array with cloned item at start and end
    return [lastItem, ...items, firstItem];
  };

  // create infinite collections
  const infiniteCollections = createInfiniteItems(collections);

  return <ProductCarousel items={infiniteCollections} />;
};

export default MainCollections;
