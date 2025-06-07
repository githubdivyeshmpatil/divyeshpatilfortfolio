import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaStackOverflow, FaGlobe } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-gray-900 text-white p-10 min-h-screen flex justify-center">
      <div className="max-w-4xl w-full relative">
        <h1 className="text-4xl font-bold text-cyan-400">R<span className="text-white">ESUME</span></h1>
        
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mt-5">
          {/* Left Section */}
          <section className="pl-6 relative">
                {/* Timeline Line */}
        <div className="absolute left-1 md:left-2 top-0 bottom-0 w-1 bg-cyan-400 rounded"></div>

            <h2 className="text-2xl font-bold">Summary</h2>
            <div className="mt-3">
              <h3 className="text-xl font-bold">DIVYESH PATIL</h3>
              <p className="text-gray-400 text-sm italic">
                A Web developer frontend  responsible for managing a team of Web 
                developers, ensuring project efficiency and timely completion.
              </p>
              <div className="mt-3 space-y-2 text-gray-300">
                <p className="flex items-center gap-2"><FaMapMarkerAlt /> Surat, Gujarat</p>
                <p className="flex items-center gap-2"><FaPhoneAlt /> +91 9529093349</p>
                <p className="flex items-center gap-2"><FaEnvelope /> divyeshpatil1212@gmail.com</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-5">Education</h2>
            <div className="mt-3">
              <h3 className="text-xl font-bold">BACHELOR IN COMPUTER APPLICATION</h3>
              <p className="text-gray-400">2020 - 2024</p>
              <p className="text-gray-400 italic">Veer Narmad South Gujarat University, Gujarat</p>
              <p className="text-gray-400 text-sm">Proud of  emphasizing practical skills beyond grades.</p>
            </div>
          </section>

          {/* Right Section */}
          
          <section className="pl-6 relative ">
          <div className="absolute left-1 md:left-2 top-0 bottom-0 w-1 bg-cyan-400 rounded"></div>

            <h2 className="text-2xl font-bold"> Experience</h2>
            <div className="mt-3">
              <h3 className="text-xl font-bold">frontend web developer</h3>
              <p className="text-gray-400">aug 2024 - march 2025 | The Miracle IT Solution</p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                <li>Setting project milestones and deadlines</li>
                <li>Assigning tasks and ensuring timely completion</li>
                <li>Providing technical guidance and support</li>
                <li>Communicating with clients for requirements</li>
                <li>responisve and best desing</li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-bold">Project and client base link</h3>
              <p className="text-gray-400"><li>The Miracle IT Solution</li> </p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                <li>https://colors-of-earth12-pclone.vercel.app/</li>
                <li>https://www-gymcity-com.vercel.app/</li>
                <li>https://internet-marketing-un24.vercel.app/</li>
                <li>https://perfect-studio-point12.vercel.app/</li>
                <li>https://murait-technology-12.vercel.app/</li>
                <li>https://flipcartclone.vercel.app/</li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-bold">Live project not access</h3>
              <p className="text-gray-400"><li>The Miracle IT Solution</li> </p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                <li>Royal Leaf Thailand</li>
                <li>The Miracle it solution</li>
                <li>Paymorz_admin</li>
                <li>Murait-Technologies</li>
                <li>Sedap-restorent-dashbord</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;