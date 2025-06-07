// ContactForm.jsx
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-[#2c333f] text-white flex flex-col justify-center items-center px-4 py-10">
      <h2 className="text-4xl font-bold mb-8">
        Contact <span className="text-cyan-400">Me!</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#1c1f26] p-5 rounded-xl flex items-start gap-4 shadow-lg">
            <FaMapMarkerAlt className="text-2xl mt-1 text-white" />
            <div>
              <h4 className="text-xl font-semibold">Location :</h4>
              <p className="text-sm text-gray-300">
                wishrantwali pune sainik recedency
              </p>
            </div>
          </div>
          <div className="bg-[#1c1f26] p-5 rounded-xl flex items-start gap-4 shadow-lg">
            <FaEnvelope className="text-2xl mt-1 text-white" />
            <div>
              <h4 className="text-xl font-semibold">Email :</h4>
              <p className="text-sm text-gray-300">divyeshpatil1212@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#1c1f26] p-5 rounded-xl flex items-start gap-4 shadow-lg">
            <FaPhone className="text-2xl mt-1 text-white" />
            <div>
              <h4 className="text-xl font-semibold">Call :</h4>
              <p className="text-sm text-gray-300">+91 9529093349</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="You Name"
              className="bg-[#1c1f26] p-3 rounded-md w-full outline-none text-sm text-white"
            />
            <input
              type="email"
              placeholder="You Email"
              className="bg-[#1c1f26] p-3 rounded-md w-full outline-none text-sm text-white"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#1c1f26] p-3 rounded-md w-full outline-none text-sm text-white"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="bg-[#1c1f26] p-3 rounded-md w-full outline-none text-sm text-white resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="mt-16 text-sm text-gray-400">
        CopyRight © 2023{' '}
        <a href="#" className="text-cyan-400 hover:underline">
          divyesh patil
        </a>
      </footer>
    </div>
  );
};

export default ContactForm;
