import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactData } from "./../../data/Contact.js";
import { 
  Header, 
  SlidingSection,
   Card, 
   ContactBall 
  } from "../../components/index.js";
import { about } from "../../data/about.js";




const Home = () => {
  const navigate = useNavigate();
  const [showContactBall, setShowContactBall] = useState(true);
  const contactRef = useRef(null); // use only one ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowContactBall(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <>

      <Header className={"sticky top-0 z-20"} />
      {showContactBall && <ContactBall />}
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-start transition-colors duration-300 text-lg bg-white">
        <div className="flex flex-col md:flex-row relative my-8 w-full md:w-3/4 md:h-screen h-190 items-center justify-center shadow-2xl rounded-2xl text-center">
          <div
            className="absolute inset-0 bg-cover md:w-1/2 h-2/5 md:h-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl bg-center"
            style={{
              backgroundImage: `url(${about.coverImage})`,
            }}
          ></div>
          <div className="relative md:w-1/2 md:h-screen h-2/5 "></div>
          <img
            src={about.profileImage}
            alt="Profile"
            className="absolute z-10 top-2/7 w-40 h-40 md:w-48 md:h-48 p-3 rounded-full border-2 object-contain bg-blue-200 shadow-2xl mb-2 md:mb-4 hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute md:w-1/2 h-2/5 md:h-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col justify-center md:pl-18 md:py-4 pt-30 px-4 md:px-0 items-center w-full md:w-1/2 md:h-screen h-2/3 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl bg-blue-100 text-black">
            <h1 className="text-4xl font-bold mb-2">
              Hi,
              <br /> I am {about.name}
            </h1>
            <br />
            <p className="text-xl leading-relaxed md:w-4/5 mx-auto">
              {about.description}
            </p>
            <div className="flex w-full justify-center items-center mb-8">
              <button
                className="bg-white w-34 mt-8 mr-4 font-semibold py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600  text-white shadow-md hover:bg-blue-600 hover:shadow-2xl"
                onClick={() => {
                  navigate("/resume");
                }}
              >
                Resume
              </button>
              <button
                className="bg-white w-34 mt-8 font-semibold py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600  text-white shadow-md hover:bg-blue-600 hover:shadow-2xl"
                onClick={() => {
                  navigate("/resume/projects");
                }}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}

      <SlidingSection />

      {/* Skills Section */}
      <section className="py-16 px-8 transition-colors duration-300 bg-white text-gray-800 text-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Skills</h3>
          <p className="text-xl leading-relaxed mb-6">
            Here are some of the skills I have mastered over the years:
          </p>
          <ul
            className="grid grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer"
            onClick={() => {
              navigate("/resume/skills");
            }}
          >{about.skills.map((skill, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">{skill}</li>
          )
          )}
          
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef}
       className="py-16 px-8 transition-colors duration-300 bg-gray-100 text-gray-800"
       >
        <h3 className="text-3xl text-center font-bold mb-4">Contact Me</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center mt-12">
          {contactData.map((items, index) => (
            <Card
              key={index}
              name={items.name}
              icon={items.icon}
              path={items.path}
            />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className=" py-4 text-center transition-colors duration-300 bg-gray-800 text-white">
        <p></p>
      </footer>
      
    </>
  );
};

export default Home;
