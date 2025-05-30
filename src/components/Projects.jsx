import React, { useState } from "react";
import { projects } from "../data/projects";
import Mask from "./Mask";
import { Link } from "react-router-dom";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null); // holds the index of clicked item

  return (
    <section id="achievements">
      {projects.map((items, index) => (
        <div
          key={index}
          className="md:flex mb-6 p-4 bg-blue-50 rounded-lg hover:shadow-lg"
        >
          <div className="flex-col justify-between items-center mb-4 md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-700 capitalize">
              {items.title}
            </h3>
            <p className="text-gray-700 mt-4">
              <span className="font-bold text-lg "> Project description: </span>
              {items.description.split(" ").slice(0, 30).join(" ")}...
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {" "}
                Read more
              </span>
            </p>
            {items.link && (
              <button
                className={`my-4 font-semibold py-2 px-4 rounded-full shadow-md ${
                  items.link
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:shadow-2xl"
                    : "bg-gradient-to-r from-gray-500 to-gray-400"
                }  text-white mr-2`}
                onClick={() => window.open(items.link, "_blank")}

                // to use https://drive.google.com/uc?export=download&id=FILE_ID
              >
                {items.link ? "Goto Project" : "currently working"}
              </button>
            )}
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 mx-auto">
            <img
              src={items.images[0]}
              alt="achievement"
              className="w-50 max-h-40 rounded-lg object-cover cursor-pointer"
              onClick={() => setActiveIndex(index)}
            />
          </div>

          {/* Render Mask only for the selected item */}
          {activeIndex === index && (
            <Mask item={items} closeMask={() => setActiveIndex(null)} />
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;
