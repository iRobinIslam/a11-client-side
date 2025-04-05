import bannerImg1 from "../../assets/bannerImg1.jpg";
import bannerImg2 from "../../assets/bannerImg2.jpg";
import bannerImg3 from "../../assets/bannerImg3.jpg";
import bannerImg4 from "../../assets/bannerImg4.jpg";
import bannerImg5 from "../../assets/bannerImg5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const BannerSection = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h3 className="text-black text-2xl md:text-4xl font-bold text-center">
                Collaborative Volunteer Management Made Simple
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg2})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h3 className="text-black text-2xl md:text-4xl font-bold text-center">
              Organized Giving Through Volunteer Collaboration
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg3})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h3 className="text-black text-2xl md:text-4xl font-bold text-center">
              Maximizing Volunteer Time for Community Benefits
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg4})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h3 className="text-black text-2xl md:text-4xl font-bold text-center">
              Organized Giving Through Volunteer Collaboration
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg5})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h3 className="text-black text-2xl md:text-4xl font-bold text-center">
              Collaborative Volunteer Management Made Simple
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
