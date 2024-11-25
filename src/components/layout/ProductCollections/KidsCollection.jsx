import CollectionPage from "../../../pages/collections/CollectionPage";

const KidsCollection = () => {
  const kidsCollectionData = {
    title: "Mens Collection",
    description: "Our premium Shirt collection for women",
    products: [],
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
