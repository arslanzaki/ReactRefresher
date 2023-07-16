import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  // OR
  // const {id} = useParams();
  return <div>Product ID: {params.id}</div>;
};

export default ProductDetails;
