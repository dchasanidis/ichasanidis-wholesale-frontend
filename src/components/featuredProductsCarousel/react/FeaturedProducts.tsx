import React from "react";
import {Carousel} from "react-bootstrap";

interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface FeaturedProductsProps {
  products: FeaturedProduct[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({products}) => {
  return (
    <div className="full-width-carousel">
      <Carousel controls={true} indicators={true}>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <a href={`/products/${product.id}`}>
              <img className="carousel-img" src={product.imageUrl} alt={product.name}/>
            </a>
            <Carousel.Caption>
              <h3>{product.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
