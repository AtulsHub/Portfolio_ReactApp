import { achievements } from "../data/achievements";
import React, { useState } from "react";
import Mask from "./Mask";

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(null); // holds the index of clicked item

  return (
    <section id="achievements">
      {achievements.map((items, index) => (
        <div
          key={index}
          className="md:flex mb-6 p-4 bg-blue-50 rounded-lg hover:shadow-lg"
        >
          <div className="flex-col justify-between items-center mb-4 md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-700 capitalize">
              {items.title}
            </h3>
            <p className="text-gray-700 mt-4">
              {items.description.split(" ").slice(0, 30).join(" ")}...
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {" "}
                Read more
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 mx-auto">
            <img
              src={items.images[0]}
              alt="achievement"
              className="w-50 max-h-40 rounded-lg object-cover  cursor-pointer"
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

export default Achievements;
