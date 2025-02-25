import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Image} from "../../../models/Image.ts";
import {getImages} from "../../../services/apirequest.ts";

const Catalog = () => {
  const params: Readonly<Partial<{ id: string }>> = useParams<{ id: string }>();
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImages().then(setImages).catch(console.error);
  }, []);

  return (
    <>
      <div>
        Catalog: {params.id}
      </div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>{image.origin_filename}</li>
        ))}
      </ul>
    </>
  );
};

export default Catalog;
