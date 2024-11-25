import CollectionPage from "../../../pages/collections/CollectionPage";


const SaleCollection = () => {
  const salesCollectionData = {
    title: "Mens Collection",
    description: "Our premium Shirt collection for women",
    products: [],
    filterOptions: [
      {
        name: "Categories",
        options: ["Formal", "Casual", "Sports", "Beach", "Hawaiian", "Dress"],
      },
    ],
    recentlyViewed: [],
    recomendations: [],
  };
  return <CollectionPage collectionData={salesCollectionData} />;
};

export default SaleCollection;
