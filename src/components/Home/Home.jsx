import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Cards/Card";
import SlidingSection from "./Achievement";
import {contactData} from './../../data/Contact.js';
 

const Home = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = React.useState(false);
  
 useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

  return (
    <>
      {/* Header Section */}
      <header className={`flex sticky top-0 z-20 items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md ${darkMode ? 'dark' : ''}`}>
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          My Portfolio
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="md:mx-8  mx-4 text-xl cursor-pointer hover:underline "
          onClick={()=>{}}
           >Projects</h1>
          <button
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 mr-2"
            onClick={() => {}}
          >
            Download CV
          </button>
          <button
            className={`absolute top-20 right-5 h-10 w-10 rounded-full font-semibold shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-yellow-300 text-gray-800'}`}
            onClick={() => setDarkMode(!darkMode)}
            
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className=" flex flex-col md:flex-row justify-center items-start bg-white">
        <div className="flex flex-col md:flex-row relative  my-8 w-full md:w-3/4 md:h-screen h-180  items-center justify-center shadow-2xl rounded-2xl text-center">
          <div
            className="absolute inset-0 bg-cover md:w-1/2 h-2/5 md:h-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl bg-center"
            style={{
              backgroundImage: "url('./7b111cc7f2002815c7f81bdbe4f2b64c.jpg')",
            }}
          ></div>
          <div className="relative md:w-1/2 md:h-screen h-2/5 "></div>

          <img
            src="/vite.svg"
            alt="Profile"
            className="absolute z-10 top-2/7 w-40 h-40 md:w-48 md:h-48 p-4 rounded-full border-4 bg-amber-50 border-blue-400 shadow-md mb-2 md:mb-4 hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute md:w-1/2 h-2/5 md:h-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl inset-0 bg-black opacity-50"></div>

          <div className="flex flex-col justify-center md:pl-18 md:py-4 pt-30 px-4 md:px-0 items-center bg-blue-100 w-full md:w-1/2 md:h-screen h-2/3 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl  text-black ">
            <h1 className="text-4xl font-bold mb-2">
              {" "}
              Hi,
              <br /> I am Atul Sharma{" "}
            </h1>
            <br />
            <p className="text-lg leading-relaxed md:w-4/5 mx-auto  ">
              A passionate developer with expertise in creating stunning web
              applications. My portfolio showcases my journey and achievements
              in the tech world.
            </p>
            <button
              className="bg-white w-32 mt-10 font-semibold py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600  text-white shadow-md hover:bg-blue-600 hover:shadow-2xl"
              onClick={() => {}}
            >
              Resume
            </button>
          </div>
        </div>
      </section>

      {/* Achievement Section */}

      <SlidingSection />

      {/* Skills Section */}
      <section className="py-16 px-8 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Skills</h3>
          <p className="text-lg leading-relaxed mb-6">
            Here are some of the skills I have mastered over the years:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">JavaScript</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">React</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
              TailwindCSS
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">Node.js</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">Express</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md">MongoDB</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-gray-100 text-gray-800">
        <h3 className="text-3xl text-center font-bold mb-4">Contact Me</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center mt-12">
          {contactData.map((items, index) => (
              <Card 
                key = {index}
                name={items.name}
                icon={items.icon}
                path={items.path}
                />
            )
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
