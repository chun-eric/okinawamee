import ProductCarousel from '../../common/Carousel/ProductCarousel'
import women2 from '../../../assets/images/collectionImages/women_2.webp'
import kids1 from '../../../assets/images/collectionImages/kids_1.webp'
import men1 from '../../../assets/images/collectionImages/men_1.webp'
const MainCollections = () => {
  // dummy data for now
  const collections = [
    {
      title: "Men's Aloha Collection",
      // subtitle: 'Relaxed Fit with Vibrant Sunset Colors',
      src: men1,
      type: 'image',
      collection: 'men'
    },
    {
      title: "Women's Hibiscus Collection",
      // subtitle: 'Soft Fabric with Iconic Hawaiian Floral Print',
      src: women2,
      type: 'image',
      collection: 'women'
    },
    {
      title: "Kids' Island Collection",
      // subtitle: 'Bright Colors and Fun Hawaiian Graphics',
      src: kids1,
      type: 'image',
      collection: 'kids'
    }
  ]

  // function to create infinite items
  const createInfiniteItems = items => {
    // Get copy of last item in the array
    const lastItem = items[items.length - 1]
    // Get copy of first item in the array
    const firstItem = items[0]

    // return new array with cloned item at start and end
    return [lastItem, ...items, firstItem]
  }

  // create infinite collections
  const infiniteCollections = createInfiniteItems(collections)

  return <ProductCarousel items={infiniteCollections} />
}

export default MainCollections
