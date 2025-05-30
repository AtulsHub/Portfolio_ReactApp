import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ className }) => {
  const navigate = useNavigate();
  return (
    <>
      <header className={`bg-blue-600 text-white text-lg ${className}`}>
        <div
          className={` sticky top-0 flex items-center justify-between py-4 px-2 shadow-md bg-gradient-to-r from-blue-500 to-purple-600 text-white `}
        >
          <h1
            className="text-2xl md:text-3xl font-bold cursor-pointer mx-2"
            onClick={() => navigate("/")}
          >
            Atul Sharma
          </h1>

          <div className="flex justify-between items-center">
            <Link to="https://drive.google.com/uc?export=download&id=1iHwLHWgP98Nr3Jtg6h3WAIwIggqy7TyM">
              <button
                className="font-semibold py-2 px-4 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-purple-500  hover:from-blue-600  text-white hover:bg-blue-600 hover:shadow-2xl mr-2 "

                // to use https://drive.google.com/uc?export=download&id=FILE_ID
              >
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </header>
      <p className=" bg-blue-600 text-white md:block md:text-xl text-lg italic px-4 py-4">
        {" "}
        Web Developer | Designer | Creator
      </p>
    </>
  );
};

export default Header;
