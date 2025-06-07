import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 left-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold ml-8">DIVYESH PATIL</h1>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden lg:flex space-x-6 mr-8 font-poppins">
          <li><a href="#" className="hover:text-gray-400 text-lg ">Home</a></li>
          <li><a href="#" className="hover:text-gray-400 text-lg ">About</a></li>
          <li><a href="#" className="hover:text-gray-400 text-lg">Resume</a></li>
          <li><a href="#" className="hover:text-gray-400 text-lg">Skills</a></li>
          <li><a href="#" className="hover:text-gray-400 text-lg">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-400 text-lg ">Contact</a></li>


        </ul>
      </div>

      {/* Mobile Menu with Full Width */}
      <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}>
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} className="text-white" />
        </button>
        <ul className="flex flex-col mt-16 space-y-6 text-lg pl-6 text-left">
          <li><a href="#" className="hover:text-gray-400 ">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}






// font----------------------------------
{/* <div className="p-10">
<h1 className="font-nunito text-4xl font-bold">Nunito Sans Font</h1>
<p className="font-ibm text-lg">IBM Plex Sans Applied</p>
<button className="font-rajdhani text-xl font-semibold bg-blue-500 text-white px-4 py-2 mt-4 rounded">
  Rajdhani Font Button
</button>
</div> */}