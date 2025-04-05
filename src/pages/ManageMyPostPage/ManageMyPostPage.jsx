import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import ShowManageData from "../ShowManageData/ShowManageData";
import MyVolunteerRequestPost from '../MyVolunteerRequestPost/MyVolunteerRequestPost'
import useAxiosSecure from "../../hook/useAxiosSecure";

const ManageMyPostPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  //fetch My volunteer need post
  const [manageData, setManageData] = useState([]);
  useEffect(() => {
    fetchManageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  // console.log(manageData);

  const fetchManageData = async () => {
    const { data } = await axiosSecure.get(`/getManageData/${user?.email}`
    );
    setManageData(data);
  };

  //fetch My Volunteer Request Post
  const [requestData, setRequestData] = useState([]);
  useEffect(() => {
    fetchRequestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchRequestData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/beVolunteer/${user?.email}`
    );
    setRequestData(data);
  };

  return (
    <div className="mt-12">
      {/* first section  */}
      <section>
        <h3 className="text-2xl md:text-4xl text-center text-white font-bold mb-5">
          My volunteer need post
        </h3>
        <div className="bg-[#F4F3F0] rounded-xl py-6 lg:w-8/12 mx-auto">
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-black text-lg">Photo</th>
                  <th className="text-black text-lg hidden lg:flex">Email</th>
                  <th className="text-black text-lg">Title</th>
                  <th className="text-black text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {manageData?.map((data) => (
                  <ShowManageData
                    key={data._id}
                    data={data}
                    manageData={manageData}
                    setManageData={setManageData}
                  ></ShowManageData>
                ))}
              </tbody>
            </table>
          </div>
          {manageData.length === 0 ? (
            <h1 className="text-center text-2xl md:text-4xl font-bold text-black my-24">
              My Volunteer Need Post is Empty
            </h1>
          ) : (
            " "
          )}
        </div>
      </section>
      {/* second section  */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-4xl text-center text-white font-bold mb-5">
        My Volunteer Request Post
        </h3>
        <div className="bg-[#F4F3F0] rounded-xl py-6 lg:w-8/12 mx-auto">
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-black text-lg">Photo</th>
                  <th className="text-black text-lg hidden lg:flex">Email</th>
                  <th className="text-black text-lg">Status</th>
                  <th className="text-black text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {requestData?.map((data) => (
                  <MyVolunteerRequestPost
                  key={data._id}
                  data={data}
                  requestData={requestData}
                  setRequestData={setRequestData}
                  ></MyVolunteerRequestPost>
                ))}
              </tbody>
            </table>
          </div>
          {requestData.length === 0 ? (
            <h1 className="text-center text-2xl md:text-4xl font-bold text-black my-24">
              My Volunteer Request post is Empty
            </h1>
          ) : (
            " "
          )}
        </div>
      </section>
    </div>
  );
};

export default ManageMyPostPage
