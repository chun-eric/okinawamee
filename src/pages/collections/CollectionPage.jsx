import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import FilterPanel from "../../components/layout/ProductCollections/components/FilterPanel/FilterPanel";
import ProductGrid from "../../components/layout/ProductCollections/components/ProductGrid/ProductGrid";
import RecentlyViewed from "../../components/layout/ProductCollections/components/RecentlyViewed/RecentlyViewed";

// component accepts collectionData as a prop - eg Mens Collection, Womens Collection etc..
const CollectionPage = ({ collectionData }) => {
  const { collection } = useParams();
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedInfo, setExpandedInfo] = useState({});

  const {
    products,
    title,
    description,
    filterOptions,
    recentlyViewed,
    recomendations,
  } = collectionData;

  return (
    <div className='max-w-7xl mx-auto px-4 py-8 '>
      <h1 className='text-3xl font-inter font-bold mb-8 capitalize'>{title}</h1>
      <div className=''>
        <FilterPanel />
        <ProductGrid products={products} />
        <RecentlyViewed products={recentlyViewed} />
      </div>
    </div>
  );
};

export default CollectionPage;
