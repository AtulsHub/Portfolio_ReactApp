import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { useState } from 'react';
import { contactData } from "../../data/Contact.js";


const ContactBall = () => {
      const [showContacts, setShowContacts] = useState(false);

      
  return (
    <div className="fixed bottom-8 right-8 z-50">
        {/* Contact Buttons */}
        <div className="relative flex-col ">
          {contactData.map((item, index) => {
            const translateAmount = 70 * (index + 1); // Each icon moves further up
            const transformStyle = showContacts
              ? `translateY(-${translateAmount}px) scale(1)`
              : `translateY(0px) scale(0)`;

            return (
              <div
                key={index}
                className="md:hidden absolute bottom-1 right-1.5 transition-all duration-500 ease-out opacity-0"
                style={{
                  transform: transformStyle,
                  opacity: showContacts ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <img
                  src={item.iconColored}
                  alt={item.name}
                  className="md:hidden w-14 h-14 bg-white rounded-full p-2 shadow-lg cursor-pointer"
                  onClick={() => window.open(item.path, "_blank")}
                />
              </div>
            );
          })}

          {/* Main Button */}
          <div
            className="md:hidden h-16 w-16 flex justify-center items-center rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600 shadow-lg"
            onClick={() => setShowContacts(!showContacts)}
          >
            {showContacts ? (
              <IoIosArrowDown className="text-white text-2xl" />
            ) : (
              <RiContactsLine className="text-white text-2xl" />
            )}
          </div>
        </div>
      </div>
  )
}

export default ContactBall