import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { achievements } from "../../data/achievements";

// ✅ Define the data here
const SlidingSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 px-4 bg-gray-100 text-gray-800 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Achievements</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="rounded-2xl "
      >
        {achievements.map((item, index) => (
          <SwiperSlide key={index} onClick={() => navigate('/resume/achievements')} >
            <div className="relative w-full overflow-hidden rounded-2xl cursor-pointer ">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.images[0]})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-center text-white p-8 md:p-8 gap-6"
              onClick={() => {}}>
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-auto h-[20rem] object-cover rounded-xl"
                  />
                </div>
                <div className="flex-col items-center justify-center w-full md:w-1/2 mx-auto">
                  <h2 className="text-2xl text-center md:text-3xl font-bold">{item.title}</h2>
                  <p className=" hidden md:block md:text-base mt-12 tracking-wider text-justify">{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlidingSection;
