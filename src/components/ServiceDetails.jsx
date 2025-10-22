import { useParams } from "react-router";

const ServiceDetails = () => {
  const id = useParams().id;
  return <div>{id}</div>;
};

export default ServiceDetails;
