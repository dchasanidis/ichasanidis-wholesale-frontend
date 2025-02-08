import {useParams} from "react-router-dom";

const Catalog = () => {
  const params: Readonly<Partial<{ id: string }>> = useParams<{ id: string }>();
  console.log(params.id);
  return (
    <>
      <div>
        Catalog: {params.id}
      </div>
    </>
  );
};

export default Catalog;
