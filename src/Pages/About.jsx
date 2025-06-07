import React from 'react'
import eb from '../assets/img/eb.jpg'

function About() {
    return (
        <div className="bg-gray-900 text-white py-12 px-6 md:px-20 lg:px-40">
          <h1 className="text-4xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Leading a talented team of mobile developers at The Miracle IT Solution.
            Passionate about building intuitive and innovative apps that make a difference.
            Love trying new technologies and constantly learning. When I'm not coding, you
            can find me hiking, cooking, or exploring the city.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src={eb}
              alt="Profile"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold">Frontend Web Developer.</h2>
              <div className="mt-4 space-y-2 text-gray-400">
                <p><strong>Birthday :</strong> 12 December 2002</p>
                <p><strong>Age :</strong> 22</p>
                <p><strong>Website :</strong> <a href="https://khuntarpit.github.io" className="text-blue-400 hover:underline">khuntarpit.github.io</a></p>
                <p><strong>Phone :</strong> +91 9529093349</p>
                <p><strong>City :</strong> Surat, Gujarat</p>
                <p><strong>Degree :</strong> Bachelor</p>
                <p><strong>Email :</strong> <a href="mailto:divyeshpatil1212@gmail.com" className="text-blue-400 hover:underline">divyeshpatil1212@gmail.com</a></p>
                <p><strong>Freelance :</strong> Available</p>
              </div>
              <ul className="mt-4 list-disc pl-5 text-gray-300 font-sm">
                <li>Developed dynamic and responsive web applications using React.js and JavaScript
                </li>
                <li>Designed, implemented, and maintained multiple frontend projects using Tailwind CSS for modern UI/UX
                </li>
                <li>Collaborated  to integrate REST APIs efficiently
                </li>
                <li>Optimized web applications for performance,</li>
                <li>Worked with third-party libraries like Redux, Axios, and Firebase .</li>
                <li>Implemented features such as authentication,</li>
                <li>Mentored junior developers, assisting them in improving React.js</li>
                <li>Deployed and managed web applications using platforms like Vercel, Netlify, and GitHub Pages</li>
              </ul>
            </div>
          </div>
        </div>
      );
    };
    

export default About