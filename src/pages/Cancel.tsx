import React from "react";
import { Link, useParams } from "react-router-dom";

const Cancel = () => {
  let { tranId } = useParams();
  return (
    <div>
      <h2
        className={`text-4xl font-bold mt-10 text-center text-black
        }`}
      >
        Payment Cancel 
      </h2>
      <Link to="/">
        <button className="py-4 rounded-sm mt-8 px-8 bg-blue-500 text-white font-semibold text-xl">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default Cancel;
