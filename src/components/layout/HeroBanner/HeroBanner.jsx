import { useState, useEffect } from "react";

const HeroBanner = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // dummy data for the image slider
  const photos = [
    {
      id: 0,
      title: "HAWAIIAN ORANGE MODE",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      Image: "https://placehold.co/1920x1080",
      mobileImage: "https://placehold.co/768x1024",
    },
    {
      id: 1,
      title: "HAWAIIAN COMFORT MODE",
      description:
        "OUR ICONIC EVERYDAY SNEAKS ARE A SOFT, PILLOWY RETREAT FOR YOUR FEET",
      Image: "https://placehold.co/1920x1080",
      mobileImage: "https://placehold.co/768x1024",
    },
  ];

  // Auto slide timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className='relative w-full h-screen'>
      {/* Main Hero Banner Container */}
      <div className='relative w-full h-full overflow-hidden'>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              currentPhoto === index ? "opactiy-100" : "opacity-0"
            }`}
          >
            {/* desktop images */}
            <img
              src={photo.Image}
              alt={photo.title}
              className='hidden md:block object-cover w-full h-full'
            />
            {/* mobile images */}
            <img
              src={photo.mobileImage}
              alt={photo.title}
              className='block md:hidden object-cover w-full h-full'
            />

            {/* Content Overlay */}
            <div className='absolute inset-0 flex flex-col'>
              {/* Desktop Content Overlay */}
              <div className='hidden md:flex flex-col items-end p-12 pt-20'>
                <h2 className='text-5xl font-mono font-bold mb-4'>
                  {photo.title}
                </h2>
                <p className='text-lg text-right max-w-md'>
                  {photo.description}
                </p>
              </div>
              {/* Mobile Content Overlay */}
              <div className=' md:hidden flex-col items-center p-14'>
                <h2 className='text-4xl font-medium mb-4'>{photo.title}</h2>
                <p className='text-lg mt-7 mx-auto text-center max-w-md'>
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Banner Dots */}
      <div className='absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2'>
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${
                currentPhoto === index ? "bg-primary scale-150" : "bg-gray-400"
              }`}
          >
            {" "}
          </button>
        ))}
      </div>

      {/* Hero Banner Buttons */}
      <div className='absolute bottom-36 right-14 flex gap-3'>
        <button className='bg-white font-bold px-8 py-3 rounded hover:bg-primary transition-colors hover:text-white'>
          SHOP MEN
        </button>
        <button className='bg-white font-bold px-8 py-3 rounded hover:bg-primary transition-colors hover:text-white'>
          SHOP WOMEN
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
