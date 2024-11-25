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
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
      },
      {
        id: "2",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
      },
      {
        id: "3",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
      },
      {
        id: "4",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
      },
      {
        id: "5",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
      },
      {
        id: "6",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
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
