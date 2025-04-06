import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ShowManageData = ({ data, manageData, setManageData }) => {
  const { _id, thumbnail, email, title } = data;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/deleteManageData/${id}`);
      toast.success("Data deleted successfully!");
      const updatedList = manageData?.filter((item) => item._id !== id);
      setManageData(updatedList);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete data");
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <p>
          Are you <b>sure?</b>
        </p>
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
    <tr>
      <th>
        <img className="w-12 h-12 rounded-lg" src={thumbnail} alt="Thumbnail" />
      </th>
      <th className="hidden lg:table-cell">{email}</th>
      <th>{title}</th>
      <td className="flex gap-2">
        <Link to={`/updateManagePost/${_id}`}>
          <button className="bg-green-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg">
            <FaRegEdit />
          </button>
        </Link>
        <button
          onClick={() => modernDelete(_id)}
          className="bg-green-500 px-2 py-1 md:px-4 md:py-2 rounded text-white lg:text-lg"
        >
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default ShowManageData;
