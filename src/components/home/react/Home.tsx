import FeaturedProducts from "../../featuredProductsCarousel/react/FeaturedProducts.tsx";
import Socials from "../../socials/react/Socials.tsx";


const Home = () => {
  const featuredProducts = [
    {id: 1, name: "Featured Product 1", price: 59.99, imageUrl: "src/assets/carousel1.png"},
    {id: 2, name: "Featured Product 2", price: 79.99, imageUrl: "src/assets/carousel2.png"},
    {id: 3, name: "Featured Product 3", price: 99.99, imageUrl: "src/assets/carousel3.png"},
  ];
  return (
    <>
      <FeaturedProducts products={featuredProducts}/>
      <Socials/>
      <></>
    </>
  )
};

export default Home;
