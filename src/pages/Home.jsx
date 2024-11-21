import ValueBanner from "./components/layout/ValueBanner/ValueBanner";
import BentoCollections from "./components/layout/ProductCollections/BentoCollections";
import MoreToShopCarousel from "./components/common/Carousel/MoreToShopCarousel";
import Subscribe from "./components/layout/Subscribe/Subscribe";
import Values from "./components/layout/Values/Values";
import MainCollections from "./components/layout/ProductCollections/MainCollections";
import HeroBanner from "./components/layout/HeroBanner/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <MainCollections />
      <ValueBanner />
      <BentoCollections />
      <MoreToShopCarousel />
      <Subscribe />
      <Values />;
    </div>
  );
};

export default Home;
