import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import useAxiosSecure from "../../hook/useAxiosSecure";

const VolunteerNeedDetailsPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure()

  const [volunteerNeedsDetails, setVolunteerNeedsDetails] = useState({});

  useEffect(() => {
    document.title = 'Volunteer need details page | Volunteer management'
    fetchJobData();
  }, [id]);

  const fetchJobData = async () => {
    const { data } = await axiosSecure.get(`/volunteerDetails/${id}`
    );
    setVolunteerNeedsDetails(data);
  };

  return (
    <div className="pt-12">
      <div className="bg-white rounded-xl p-4 lg:w-1/2 mx-auto">
        <div className="w-full">
          <img className="rounded-t-xl mb-4 w-full" src={volunteerNeedsDetails.thumbnail} alt="" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{volunteerNeedsDetails.title}</h3>
          <h4 className="text-lg">Category: {volunteerNeedsDetails.category}</h4>
          {
            volunteerNeedsDetails?.deadline && <p className="text-lg">Deadline: {format(new Date(volunteerNeedsDetails.deadline), "P")}</p>
          }
          <p>Description: {volunteerNeedsDetails.description}</p>
          <p>No. of volunteers needed: {volunteerNeedsDetails.number}</p>
          <p>Email: {volunteerNeedsDetails.email}</p>
          <p>Name: {volunteerNeedsDetails.name}</p>
          <p>Location: {volunteerNeedsDetails.location}</p>
          <div>
          <Link to={`/beAVolunteer/${id}`}>
            <button className="text-lg bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg mt-2 text-white font-semibold">
            Be a Volunteer
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedDetailsPage
