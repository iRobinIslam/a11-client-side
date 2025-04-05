import { format } from "date-fns";
import { Link } from "react-router-dom";

const ShowVolunteerNeedsSection = ({ data }) => {
  const {_id, thumbnail, title, category, deadline } = data;
  
  return (
    <div className="bg-white rounded-xl p-4 relative hover:scale-105 transition-transform">
      <div className="w-full">
        <img className="rounded-t-xl mb-4 w-full h-[200px] object-cover" src={thumbnail} alt="" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h4 className="text-lg">{category}</h4>
        <p className="text-lg pb-14">{format(new Date(deadline), "P")}</p>
        <div className="flex justify-between items-center gap-5 absolute bottom-4">
          <Link to={`/volunteerNeedDetails/${_id}`}>
            <button className="text-lg bg-green-500 py-1 px-3 rounded-lg hover:bg-green-600 mt-2 text-white">
              View Details
            </button>
          </Link>
          <Link to='/allVoNeePost'>
            <button className="text-lg bg-green-500 py-1 px-3 rounded-lg hover:bg-green-600 mt-2 text-white">
              See all
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowVolunteerNeedsSection
