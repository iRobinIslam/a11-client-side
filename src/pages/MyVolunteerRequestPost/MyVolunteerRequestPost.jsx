import { toast } from "react-toastify";
import axios from "axios";

const MyVolunteerRequestPost = ({ data, requestData, setRequestData }) => {
  const handleDelete = async (id) => {
    try {
      // No need to destructure the response if you're not using it
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/deleteMyVolunteer-request/${id}`
      );
      toast.success("Data removed successfully!");
      const filter = requestData?.filter((fil) => fil._id !== id);
      setRequestData(filter);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <tr>
        <th>
          <img className="w-12 h-12 rounded-lg" src={data.thumbnail} alt="" />
        </th>
        <th className="hidden lg:flex">{data.email}</th>
        <th className="text-green-700">{data.status}</th>
        <td className="flex gap-2">
          <button
            onClick={() => {
              modernDelete(data._id);
            }}
            className="bg-green-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyVolunteerRequestPost;
