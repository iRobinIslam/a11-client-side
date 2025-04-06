import React, { useEffect, useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const BeAVolunteerPage = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  const [volunteerNeedsDetails, setVolunteerNeedsDetails] = useState({});

  // Memoize fetchJobData to avoid unnecessary re-creations and to handle it inside useEffect
  const fetchJobData = useCallback(async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/be-volunteer/${id}`
    );
    setVolunteerNeedsDetails(data);
  }, [id]);

  useEffect(() => {
    document.title = "Be a volunteer page | Volunteer management";
    fetchJobData();
  }, [fetchJobData]);  // Added fetchJobData to the dependency array

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const category = form.category.value;
    const location = form.location.value;
    const number = form.number.value;
    const deadline = startDate;
    const description = form.description.value;
    const name = user?.name;
    const email = user?.email;
    const suggestion = form.suggestion.value;
    const volunteerId = id;

    if (number === "" || parseInt(number) === 0) {
      return toast.error("No. of volunteers needed cannot be 0 or empty", {
        position: "top-center",
      });
    }

    const formData = {
      thumbnail,
      title,
      category,
      location,
      name,
      email,
      deadline,
      description,
      suggestion,
      status: "requested",
      volunteerId,
    };

    // make a post request
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/request-be-volunteer`,
        formData
      );
      form.reset();
      toast.success("Be volunteer request is successfully", {
        position: "top-center",
      });
      console.log(data);
    } catch (err) {
      toast.error("Something went wrong", {
        position: "top-center",
      });
      console.error(err);  // Log the error if needed
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl">
      <div className="mt-12 mx-4 lg:mx-0 p-3 lg:p-5 rounded-xl">
        <h3 className="text-center my-3 text-3xl text-black font-semibold">
          Be a volunteer page
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="lg:flex gap-3">
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Thumbnail
              </label>
              <input
                name="thumbnail"
                type="text"
                defaultValue={volunteerNeedsDetails.thumbnail}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Post Title
              </label>
              <input
                name="title"
                type="text"
                defaultValue={volunteerNeedsDetails.title}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="lg:flex gap-3">
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700" htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  disabled
                  defaultValue={volunteerNeedsDetails.category}
                  className="border p-2 rounded-md bg-white"
                >
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Social service">Social service</option>
                  <option value="Animal welfare">Animal welfare</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Location
              </label>
              <input
                name="location"
                type="text"
                defaultValue={volunteerNeedsDetails.location}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="lg:flex gap-3">
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                No. of volunteers needed
              </label>
              <input
                name="number"
                type="number"
                defaultValue={volunteerNeedsDetails.number}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md w-full bg-white"
                  selected={startDate}
                  disabled
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          {/* Organizer name and email */}
          <div className="lg:flex gap-3">
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Organizer Name
              </label>
              <input
                name="name"
                type="text"
                defaultValue={volunteerNeedsDetails.name}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Organizer Email
              </label>
              <input
                name="email"
                type="email"
                defaultValue={volunteerNeedsDetails.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>
          {/* volunteer and email */}
          <div className="lg:flex gap-3">
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Volunteer Name
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700 " htmlFor="job_title">
                Volunteer Email
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              defaultValue={volunteerNeedsDetails.description}
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="suggestion">
              Suggestion
            </label>
            <textarea
              placeholder="Suggestion"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              name="suggestion"
              id="suggestion"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white font-semibold text-xl transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 w-full"
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteerPage;
