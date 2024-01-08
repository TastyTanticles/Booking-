import { useLoaderData, useNavigate } from "react-router-dom";
import "./Tours.css";
import { useState } from "react";
export default function Tours() {
  const navigate = useNavigate();
  const [data, setData] = useState(useLoaderData());
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div
          className="tours"
          key={item.id}
        >
          <div className="tours-text">
            <h1>{item.title}</h1>
            <button onClick={() => navigate(`/tours/${item.id}`)}>
              Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
