import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState([]); // To store fetched data
  const [next, setNext] = useState(0);  // Current image index
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
        const result = await response.json();
        setData(result); // Update data with fetched images
        setLoading(false); // Loading complete
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handlers for navigation
  const handlePrev = () => {
    setNext((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setNext((prev) => (prev + 1) % data.length);
  };

  // Show a loading state or fallback if data is unavailable
  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="text-center text-gray-500">No images available</div>;
  }

  return (
    <div className="container mx-auto relative">
      <div onClick={handlePrev}
       className="absolute top-[30%] md:top-[50%] left-8">
        <button
          className="bg-orange-700 text-white font-bold text-lg p-3"
          onClick={handlePrev}
        >
          {"<"}
        </button>
      </div>
      <img
        className="w-full h-64 sm:h-[500px] p-8 rounded-2xl"
        src={data[next]?.download_url || "https://via.placeholder.com/500"}
        alt={`Image ${next + 1}`}
      />
      <div onClick={handleNext}
      className="absolute top-[30%] md:top-[50%] right-8">
        <button
          className="bg-orange-700 text-white font-bold text-lg p-3"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Fetch;
