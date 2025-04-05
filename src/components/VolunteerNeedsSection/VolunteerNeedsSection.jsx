import axios from "axios";
import { useEffect, useState } from "react";
import ShowVolunteerNeedsSection from "../ShowVolunteerNeedsSection/ShowVolunteerNeedsSection";

const VolunteerNeedsSection = () => {
    const [volunteerNeedsData, setVolunteerNeedsData] = useState([])
    useEffect(()=> {
      document.title = 'Volunteer Details page | Volunteer management'
        const fetchVolunteerNeedsData = async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-needs`)
          setVolunteerNeedsData(data)
        }
          fetchVolunteerNeedsData()
        }, [])

  return (
    <div className="my-12">
        <h3 className="text-3xl text-center text-white font-bold">Volunteer Needs </h3>
        <p className="mb-6 mt-1 text-white md:w-8/12 lg:w-5/12 mx-auto text-center px-4">We are looking for dedicated volunteers to join us in making a positive impact. Become a part of our mission and contribute to meaningful community initiatives!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-12  gap-5">
            {
                volunteerNeedsData?.map(data => <ShowVolunteerNeedsSection key={data._id} data={data}></ShowVolunteerNeedsSection>)
            }
        </div>
    </div>
  );
};

export default VolunteerNeedsSection;
