import axios from "axios";
import { useEffect, useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import ShowAllVolunteerPostPage from "../../components/ShowAllVolunteerPostPage/ShowAllVolunteerPostPage";
import AllVolunteerTableLayout from "../AllVolunteerTableLayout/AllVolunteerTableLayout";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const AllVoNeePostPage = () => {
  const [volunteerNeedsData, setVolunteerNeedsData] = useState([]);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(true);
  const changeLayout = (toggle) => {
    setLayout(toggle);
  };

  useEffect(() => {
    const fetchVolunteerNeedsData = async () => {
      document.title = "All volunteer need Post page | Volunteer management";
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-volunteer-needs?search=${search}`
      );
      setVolunteerNeedsData(data);
    };
    fetchVolunteerNeedsData();
  }, [search]);

  const resetFn = () => {
    setSearch("");
  };
  if(volunteerNeedsData.length === 0){
    return <LoadingPage></LoadingPage>
  }
  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="flex justify-center lg:justify-between items-center">
        <h3 className="hidden md:flex text-3xl text-white font-bold">
          All Volunteer Needs Post
        </h3>
        <div className="flex p-1 overflow-hidden focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent rounded-l-md"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Post Title"
            aria-label="Post Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-500 rounded-r-md hover:bg-green-600 focus:bg-green-600 focus:outline-none">
            Search
          </button>
          <button
            onClick={resetFn}
            className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-500 rounded-md ml-3 hover:bg-green-600 focus:bg-green-600 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-3 mb-5">
          <button onClick={()=> changeLayout(false)} className="btn"><CiViewTable size={25} /></button>
          <button onClick={()=> changeLayout(true)} className="btn"><TfiLayoutGrid3 size={17}/></button>
        </div>
      {layout ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-5">
          {volunteerNeedsData?.map((data) => (
            <ShowAllVolunteerPostPage
              key={data._id}
              data={data}
            ></ShowAllVolunteerPostPage>
          ))}
        </div>
      ) : (
        <div className="mb-12 mt-3">
          <div className="bg-[#F4F3F0] rounded-xl py-6 lg:w-8/12 mx-auto">
            <div className="overflow-x-auto ">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-black text-lg">Photo</th>
                    <th className="text-black text-lg">Title</th>
                    <th className="text-black text-lg hidden lg:flex">Email</th>
                    <th className="text-black text-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerNeedsData?.map((data) => (
                    <AllVolunteerTableLayout
                    key={data._id}
                    data={data}
                    ></AllVolunteerTableLayout>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {
        volunteerNeedsData.length === 0 && (
          <h1 className="text-center text-5xl font-bold h-screen text-white mt-12">DATA NOT FOUND</h1>
        )
      }
    </div>
  );
};

export default AllVoNeePostPage
