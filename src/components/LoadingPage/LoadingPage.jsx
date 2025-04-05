

import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {loading ? (
        <FadeLoader color="#36d7b7" size={15} />
      ) : (
        " "
      )}
    </div>
  );
};

export default LoadingPage;

