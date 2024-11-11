import Logo from "../Header/components/Logo";
import valueBannerImage from "../../../assets/images/ValueBanner/valueBannerImage.svg";
const ValueBanner = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-start p-8 md:p-12 my-8 mx-auto'>
      <div className='w-full p-10 md:p-16 '>
        <div className='max-w-4xl mx-auto text-center space-y-6 '>
          <h2 className='font-bold text-3xl md:text-4xl z-50 text-black'>
            WEAVING TRADITION WITH TOMORROW
          </h2>
          <p className='text-base md:text-lg max-w-xl flex-wrap px-4 pb-3 z-50 mx-auto'>
            The original Okinawan kariyushi shirts crafted with both Aloha
            spirit and island heritage. Okinawa Mee shirts tells a story of our
            islands - from the vibrant coral reefs to the gentle ocean breezes
            that shape our Okinawa way of life.
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <img
            className='w-full h-auto transform -scale-x-100 '
            style={{ objectFit: "cover" }}
            src={valueBannerImage}
            alt='japanese waves'
          />
        </div>
      </div>
    </div>
  );
};

export default ValueBanner;
