import React from "react";
import Swal from "sweetalert2";
import contactImg from "../../assets/contactImage.png";
function ContactSection() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88f9a790-8572-4074-aec2-b48c5e4ba0a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="" id="contact">
      <h3 className="text-3xl  text-white font-bold text-center">
        Contact with us
      </h3>
      <p className="text-white md:w-6/12 lg:w-5/12 mx-auto text-center mb-6 px-2">
      Don't hesitate to contact with us. Feel free to get in touch with us. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <div className="bg-white my-12px-6 py-12 rounded-xl">
        <div className="md:flex items-center">
          <div className="flex-1">
            <img className="h-[350px] w-full object-cover" src={contactImg} alt="" />
          </div>
          <div className="flex-1 p-4">
            <form onSubmit={onSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered"
                  id=""
                ></textarea>
              </div>
              <button
                className="btn bg-green-500 hover:bg-green-600 border-green-500 text-lg text-white mt-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
