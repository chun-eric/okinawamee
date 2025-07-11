import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../../../assets/hero_assets/hero-1.webp'
import banner2 from '../../../assets/hero_assets/hero-2.webp'
import banner3 from '../../../assets/hero_assets/hero-3.webp'
import banner4 from '../../../assets/hero_assets/hero-4.webp'
import banner5 from '../../../assets/hero_assets/hero-5b.webp'

const HeroBanner = () => {
  const [currentPhoto, setCurrentPhoto] = useState(1)

  // dummy data for the image slider
  const photos = [
    {
      id: 1,
      title: 'OKINAWA COMFORT ',
      description: 'AUTHENTIC KARIYUSHI SHIRTS CRAFTED WITH THE ISLAND SPIRIT',
      Image: banner1,
      mobileImage: banner1
    },
    {
      id: 2,
      title: 'OKINAWA COMFORT',
      description: 'AUTHENTIC KARIYUSHI SHIRTS CRAFTED WITH THE ISLAND SPIRIT',
      Image: banner2,
      mobileImage: banner2
    },
    {
      id: 3,
      title: 'OKINAWA SPIRIT',
      description: 'AUTHENTIC KARIYUSHI SHIRTS CRAFTED WITH THE ISLAND SPIRIT',
      Image: banner3,
      mobileImage: banner3
    },
    {
      id: 4,
      title: 'OKINAWA SPIRIT',
      description: 'AUTHENTIC KARIYUSHI SHIRTS CRAFTED WITH THE ISLAND SPIRIT',
      Image: banner4,
      mobileImage: banner4
    },
    {
      id: 5,
      title: 'OKINAWA SPIRIT',
      description: 'AUTHENTIC KARIYUSHI SHIRTS CRAFTED WITH THE ISLAND SPIRIT',
      Image: banner5,
      mobileImage: banner5
    }
  ]

  // Auto slide timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto(prev => (prev + 1) % photos.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [photos.length])

  return (
    <div className='relative w-full h-screen'>
      {/* Main Hero Banner Container */}
      <div className='relative w-full h-full overflow-hidden'>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              currentPhoto === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* desktop images */}
            <img
              src={photo.Image}
              alt={photo.title}
              className='hidden object-cover w-full h-full md:block'
            />
            {/* mobile images */}
            <img
              src={photo.mobileImage}
              alt={photo.title}
              className='block object-cover w-full h-full md:hidden'
            />

            {/* Content Overlay */}
            <div className='absolute inset-0 flex flex-col'>
              {/* Desktop Content Overlay */}
              <div className='flex-col items-start hidden p-12 pt-20 md:flex'>
                <h2
                  className='mb-4 font-mono font-bold text-white text-7xl outline-black'
                  style={{
                    WebkitTextStroke: '0.5px rgba(0,0,0,0.2)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.15)'
                  }}
                >
                  {photo.title}
                </h2>
                <p className='max-w-md text-2xl text-left text-white'>
                  {photo.description}
                </p>
              </div>
              {/* Mobile Content Overlay */}
              <div className='flex-col items-center md:hidden p-14'>
                <h2 className='mb-4 text-4xl font-bold text-center text-white'>
                  {photo.title}
                </h2>
                <p className='max-w-md mx-auto text-lg text-center text-white mt-7'>
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Banner Dots */}
      <div className='absolute flex flex-col gap-2 transform -translate-y-1/2 right-8 top-1/2'>
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${
                currentPhoto === index ? 'bg-primary scale-150' : 'bg-gray-400'
              }`}
          >
            {' '}
          </button>
        ))}
      </div>

      {/* Hero Banner Buttons */}
      <div className='absolute flex md:bottom-36 md:left-14 bottom-20 right-8 w-[calc(100%-4rem)] md:w-auto gap-3'>
        <Link
          to='/collections/mens'
          className='flex-1 px-8 py-3 font-bold text-center transition-colors bg-white rounded font-poppins md:flex-initial hover:bg-primary hover:text-white'
        >
          SHOP MEN
        </Link>
        <Link
          to='/collections/womens'
          className='flex-1 px-8 py-3 font-bold text-center transition-colors bg-white rounded font-poppins md:flex-initial hover:bg-primary hover:text-white'
        >
          SHOP WOMEN
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner
