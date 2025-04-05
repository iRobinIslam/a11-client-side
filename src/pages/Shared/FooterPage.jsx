import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import volunteerLogo from "../../assets/volunteerLogo.jpg";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const FooterPage = () => {
  return (
    <div className="py-16">
      <div className="bg-green-300 p-10">
        <footer className="footer text-neutral-content max-w-7xl mx-auto">
          <nav>
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                src={volunteerLogo}
                alt="logo"
              />
              <h1 className="text:xl lg:text-2xl font-bold ml-2 text-gray-700">
                Volunteer Management
              </h1>
            </div>
            <p className="text-black">support people worldwide and keep</p>
            <p className="text-black">an eye in the future Support.</p>
            <div className="flex gap-6">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
              >
                <FaFacebookF className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
              </Link>
              <Link to="https://x.com/" target="_blank">
                <FaTwitter className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
              </Link>

              <Link to="https://www.instagram.com/" target="_blank">
                <FaInstagram className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
              </Link>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
              >
                <FaLinkedin className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
              </Link>
            </div>
          </nav>
          <nav>
            <h6 className="text-xl text-black font-bold">Stay Up to Date</h6>
            <a href="/#contact" className="link link-hover text-black">
              Contact Us
            </a>
            <a href="/#blogs" className="link link-hover text-black">
              Blogs
            </a>
            <a href="/#reviews" className="link link-hover text-black">
              Reviews
            </a>
            <a href="/#faq" className="link link-hover text-black">
              FAQ's
            </a>
          </nav>
          <nav>
            <h6 className="text-xl  text-black font-bold">Contact us</h6>
            <p className="flex items-center gap-3 text-black">
              <FaSquarePhoneFlip size={20} />{" "}
              <small className="text-lg text-black">+8801782836660</small>
            </p>
            <p className="flex items-center gap-3 text-black">
              <MdEmail size={20} />{" "}
              <small className="text-lg text-black">
                khandokarrobinislam@gmail.com
              </small>
            </p>
          </nav>
        </footer>
        <p className="text-center mt-3">
          © 2025 VolunteerMatters. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterPage
