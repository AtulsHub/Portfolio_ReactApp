import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Mask = ({ item, closeMask }) => {
  useEffect(() => {
    // Disable body scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-[#051626be]"
        onClick={closeMask}
      ></div>

      <div className="fixed top-0 left-0 md:left-1/4 md:w-2/4 h-full flex justify-center text-white md:opacity-100 opacity-90">
        <div className="bg-black overflow-y-auto md:scrollbar scrollbar-none mask rounded-2xl py-12 px-8 text-end">
          <button
            onClick={closeMask}
            className="fixed z-60 top-4 right-6 mb-4 w-8 h-8 bg-gray-500 hover:bg-gray-600 opacity-80 text-white text-center text-2xl rounded"
          >
            X
          </button>

          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl text-center font-bold mb-10 capitalize">
              {item.title}
            </h2>

            <div className="mt-4 grid gap-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: false }}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                loop={true}
                className="w-full h-80 rounded-2xl"
              >
                {item.images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </SwiperSlide>
                ))}

                {item.videos?.map((video, index) => (
                  <SwiperSlide key={index}>
                    <video
                      src={video}
                      controls
                      loop
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <p className="text-lg text-end my-4">
                <strong>Date:</strong> {item.dateEarned}
              </p>

              <p className="mx-8 text-gray-200 tracking-wider">
                <span className="text-cyan-600 font-bold text-lg">
                  Description:{" "}
                </span>
                {item.description}
              </p>

              {item.TechUsed && (
                <p className="mx-8 text-gray-200 tracking-widest">
                  <span className="text-cyan-600 font-bold text-lg">
                    Tech Used:{" "}
                  </span>
                  {item.TechUsed}
                </p>
              )}

              {item.Features && (
                <p className="mx-8 text-gray-200 tracking-widest">
                  <span className="text-cyan-600 font-bold text-lg">
                    Features:{" "}
                  </span>
                  {item.Features}
                </p>
              )}

              <div>
                 
                  <button
                    disabled={!item.link}
                    className={`font-semibold py-2 px-4 rounded-full shadow-md ${
                      item.link
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:shadow-2xl"
                        : "bg-gradient-to-r from-gray-500 to-gray-400 opacity-60 cursor-not-allowed"
                    } text-white mr-2`}
                    onClick={() =>
                      item.link && window.open(item.link, "_blank")
                    }
                  >
                    {item.link ? "Go to Project" : "Currently Working"}
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mask;
