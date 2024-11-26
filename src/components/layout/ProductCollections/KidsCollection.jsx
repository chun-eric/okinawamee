import CollectionPage from "../../../pages/collections/CollectionPage";

const KidsCollection = () => {
  const kidsCollectionData = {
    title: "Kids Collection",
    description: "Our premium Shirt collection for women",
    products: [
      {
        id: "1",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: false,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-blue-shirt",
      },
      {
        id: "2",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: true,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-blue-shirt",
      },
      {
        id: "3",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: false,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-blue-shirt",
      },
      {
        id: "4",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: true,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
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
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-blue-shirt",
      },
      {
        id: "6",
        name: "Classic Blue Hawaiian Shirt",
        price: 59.99,
        isBestSeller: true,
        image: "https://placehold.co/315x315", // placeholder image
        description: "A classic blue Hawaiian shirt, perfect for any occasion.",
        colors: ["blue", "white", "red"],
        sizes: ["S", "M", "L", "XL"],
        category: "shirts",
        collection: "casual",
        slug: "classic-blue-shirt",
      },
    ],
    filterOptions: [
      {
        name: "Gender",
        options: ["Boys", "Girls"],
      },
      {
        name: "Categories",
        options: ["Formal", "Casual", "Sports", "Beach", "Hawaiian", "Dress"],
      },
      {
        name: "Age Range",
        options: ["2-4 Years", "4-6 Years", "6-8 Years", "8-12 Years"],
      },
      {
        name: "Collections",
        options: ["School", "Play", "Special Occasion", "Seasonal"],
      },
    ],
    recentlyViewed: [],
    recomendations: [],
  };
  return <CollectionPage collectionData={kidsCollectionData} />;
};

export default KidsCollection;
