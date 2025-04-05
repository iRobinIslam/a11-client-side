import { format } from "date-fns";
import { Link } from "react-router-dom";

const ShowAllVolunteerPostPage = ({ data }) => {
  const {_id, thumbnail, title, category, deadline } = data;
  
  return (
    <div className="bg-white rounded-xl p-4 hover:scale-105 transition-transform relative">
      <div className="w-full">
        <img className="rounded-t-xl mb-4 w-full h-[200px] object-cover" src={thumbnail} alt="" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h4 className="text-lg">{category}</h4>
        <p className="text-lg pb-14">{format(new Date(deadline), "P")}</p>
        <div className="flex justify-between items-center absolute bottom-4">
          <Link to={`/volunteerNeedDetails/${_id}`}>
            <button className="text-lg bg-green-500 py-1 px-2 rounded-lg mt-2 text-white hover:bg-green-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowAllVolunteerPostPage;
