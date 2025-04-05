import React, { useEffect } from "react";
import volunteerMission from "../../assets/volunteerMission.png";
const AboutPage = () => {

   useEffect(() => {
      document.title = "About page | Volunteer management";
    }, []);

  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-1">About Us</h2>
      <p className="text-center text-white text-lg mb-8">
        Building Communities, One Volunteer at a Time
      </p>
      <div className="lg:flex justify-between gap-5">
        <div className="w-full lg:w-1/2 space-y-3 text-center px-4 mb-6 lg:mb-0">
          <div>
            <h3 className=" text-gray-700 font-bold text-xl"> Empowering Communities</h3>
            <p className="text-white">
              Our mission is to create opportunities for individuals to
              contribute to their communities meaningfully. Through
              volunteering, we aim to empower people, strengthen bonds, and
              build a more compassionate and united world.
            </p>
          </div>
          <div>
            <h3 className=" text-gray-700 font-bold text-xl">Driving Change Through Action</h3>
            <p className="text-white">
            Our mission is to drive meaningful change by connecting volunteers with impactful causes. We believe every small act of kindness contributes to a larger movement for social good
            </p>
          </div>
          <div>
            <h3 className=" text-gray-700 font-bold text-xl">Building a Better World Together</h3>
            <p className="text-white">
            We are dedicated to building a better world by harnessing the power of volunteerism. Our mission is to unite individuals from all walks of life to create sustainable solutions and enrich the lives of those we serve
            </p>
          </div>
          <div>
            <h3 className=" text-gray-700 font-bold text-xl">Inspiring Hope and Action</h3>
            <p className="text-white">
            Our mission is to inspire hope and encourage action. We believe that together, through volunteering, we can overcome challenges, uplift communities, and create a more equitable world.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={volunteerMission} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage
