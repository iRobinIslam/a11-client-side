import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    useEffect(() => {
        document.title = "Details page | Volunteer management";
      }, []);
    
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => {
        const detailsData = data.find((fil) => fil.id == id);
        setDetails(detailsData);
      });
  }, []);
  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <h3 className="text-3xl text-center text-white font-bold mb-3">Blog Details</h3>
      <div className="flex gap-5 bg-white">
        <div className="w-full h-[280px] flex-1">
          <img
            className="w-full h-[280px] object-cover"
            src={details.image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black mt-2">
            {details.title}
          </h3>
          <p className="text-gray-500">{details.description}</p>
        </div>
      </div>
      <div className="mt-5">
      {details.sections && details.sections.length > 0 ? (
          details.sections.map((section, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-lg font-bold">{section.heading}</h3>
              <p className="text-gray-100">{section.content}</p>
            </div>
          ))
        ) : (
          <p>No sections available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails
