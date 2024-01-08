import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const TourDetails = () => {
  const [data, setData] = useState(useLoaderData());
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default TourDetails;
