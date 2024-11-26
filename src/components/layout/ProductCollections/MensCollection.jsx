import CollectionPage from "../../../pages/collections/CollectionPage";

const MensCollection = () => {
  const mensCollectionData = {
    title: "Mens Collection",
    description: "Our premium Shirt collection for men",
    products: [
      {
        id: "1",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,

        isBestSeller: true,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-shirt",
      },
      {
        id: "2",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: true,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-teal-shirt",
      },
      {
        id: "3",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: false,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-white-shirt",
      },
      {
        id: "4",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: false,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-blue-shirt",
      },
      {
        id: "5",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: false,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-orange-shirt",
      },
      {
        id: "6",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: false,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-red-shirt",
      },
    ],
    filterOptions: [
      {
        name: "Categories",
        options: [
          "Formal",
          "Casual",
          "Sports",
          "Beach",
          "Hawaiian",
          "Kamehameha",
        ],
      },
    ],
    recentlyViewed: [],
    recomendations: [],
  };
  return <CollectionPage collectionData={mensCollectionData} />;
};

export default MensCollection;
