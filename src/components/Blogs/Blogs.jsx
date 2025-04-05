import { Link } from "react-router-dom";
const Blogs = ({item}) => {
  const {id, image, title, description} = item
  
  return (
    <div id="blogs">
      <div className="bg-white relative h-full">
          <div className="w-full h-[280px] overflow-hidden">
            <img className="w-full h-[280px] hover:scale-125 duration-300 transition-transform" src={image} alt="" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-black mt-2">
              {title}
            </h3>
            <p className="text-black mt-2 pb-16">
              {description}
            </p>
            <Link to={`/blogs/${id}`}>
              <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-lg border-green-500 hover:text-green-60 text-white mt-3 absolute bottom-4">
                See More
              </button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Blogs;
