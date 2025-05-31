import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { contactData } from "./data/Contact.js";
import { about } from "./data/about.js";

import {
  Education,
  DetailPage,
  Skills,
  Projects,
  Achievements,
  Header,
  ContactBall,
} from "./components/index.js";

function App() {
  const { section } = useParams();
  const [activeSection, setActiveSection] = useState(section || "education");
  const [activeButton, setActiveButton] = useState(section || "education");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setActiveSection(buttonName);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "achievements":
        return <Achievements />;
      case "projects":
        return <Projects />;
      default:
        return <Education />;
    }
  };

  return (
    <>
      <ContactBall className="md:hidden" />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 text-blue-900">
              <Header className="" />

              <div className="flex flex-col md:flex-row mt-4 md:mt-6">
                <nav className="bg-gradient-to-r from-blue-400 to-purple-500  text-blue-900 md:p-6 p-4 shadow-lg md:w-1/4 md:rounded-lg md:mr-4">
                  <header
                    className={`hidden md:flex relative flex-col items-center p-6 mb-4 shadow-lg bg-gradient-to-r from-blue-300 to-blue-500 text-white`}
                  >
                    <img
                      src={about.profileImage}
                      alt="Profile"
                      className="w-16 h-16 md:w-32 md:h-32 rounded-full border-4 border-blue-400 shadow-md mb-2 md:mb-4 hover:scale-110 transition-transform duration-300"
                    />
                    <h1 className="text-xl md:text-3xl text-center font-extrabold tracking-wide">
                      {about.name}
                    </h1>
                    <div className="hidden md:flex md:flex-wrap md:justify-evenly w-full mt-4">
                      {contactData.map((items, index) => (
                        <img
                          key={index}
                          src={items.icon}
                          alt={items.name}
                          className="w-10 h-10 rounded-[50%] cursor-pointer p-1 transition-transform duration-300 hover:scale-128"
                          onClick={() => {
                            window.open(items.path, "_blank");
                          }}
                        />
                      ))}
                    </div>
                  </header>

                  <ul className="flex md:flex-col gap-4 md:gap-0 justify-start md:justify-start space-y-0 md:space-y-6 md:h-50 overflow-x-auto">
                    <li>
                      <button
                        onClick={() => handleButtonClick("education")}
                        className={`w-full text-left px-4 py-2 rounded-3xl md:rounded-lg font-semibold transition-all duration-300 ${
                          activeButton === "education"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-blue-900 hover:bg-blue-600 hover:text-white"
                        }`}
                      >
                        Education
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleButtonClick("skills")}
                        className={`w-full text-left px-4 py-2 rounded-3xl md:rounded-lg font-semibold transition-all duration-300 ${
                          activeButton === "skills"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-blue-900 hover:bg-blue-600 hover:text-white"
                        }`}
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleButtonClick("achievements")}
                        className={`w-full text-left px-4 py-2 rounded-3xl md:rounded-lg font-semibold transition-all duration-300 ${
                          activeButton === "achievements"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-blue-900 hover:bg-blue-600 hover:text-white"
                        }`}
                      >
                        Achievements
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleButtonClick("projects")}
                        className={`w-full text-left px-4 py-2 rounded-3xl md:rounded-lg font-semibold transition-all duration-300 ${
                          activeButton === "projects"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-blue-900 hover:bg-blue-600 hover:text-white"
                        }`}
                      >
                        Projects
                      </button>
                    </li>
                  </ul>
                </nav>

                <main className="flex-1 p-4 md:p-6 bg-white text-blue-900 rounded-lg shadow-lg h-screen overflow-y-auto">
                  {renderSection()}
                </main>
              </div>

              <footer className="bg-blue-900 text-white text-center p-4 mt-6"></footer>
            </div>
          }
        />
        <Route
          path="/education/bachelors"
          element={
            <DetailPage
              title="Bachelor's Degree"
              description="Full details about your bachelor's degree."
            />
          }
        />
        <Route
          path="/education/masters"
          element={
            <DetailPage
              title="Master's Degree"
              description="Full details about your master's degree."
            />
          }
        />
        <Route
          path="/skills/programming-languages"
          element={
            <DetailPage
              title="Programming Languages"
              description="Full details about programming languages."
            />
          }
        />
        <Route
          path="/skills/frameworks"
          element={
            <DetailPage
              title="Frameworks"
              description="Full details about frameworks."
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
