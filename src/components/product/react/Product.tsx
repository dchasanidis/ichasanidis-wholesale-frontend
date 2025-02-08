import React from "react";
import { Carousel } from "react-bootstrap";
import {useParams} from "react-router-dom";

const Product: React.FC = () => {
  const params: Readonly<Partial<{ id: string }>> = useParams<{ id: string }>();
  console.log(params);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../pics/1415-01-1001 A.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../pics/1415-03-1024 B.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../pics/1415-04-1014 A.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-md-6">
          <h2>Product Name</h2>
          <p>
            <strong>Price:</strong> $100.00
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            auctor augue at tortor efficitur, in facilisis libero maximus. Ut
            id dolor in ligula consequat convallis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
