import SpecialCard from "../SpecialCard/SpecialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import db from "../../../db.json";
import PlantHeder from "../Module/PlantHeder";
import "swiper/css";
import "swiper/css/autoplay";

function SpecialSlider() {
  return (
    <>
      <div className=" mx-24">
        {/* Title  */}
        <div className="flex justify-center items-center mt-24 Rokh">
          <div className="flex items-center content-center text-center mb-10 text-5xl">
            <PlantHeder size={20} text="آخرین مقالات" />
          </div>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20} // فاصله بین اسلایدها
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            1200: {
              slidesPerView: 4, // تعداد کارت‌ها در صفحه نمایش بزرگ
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            },
          }}
        >
          {db.Products.map((product) =>
            product.price ? (
              <SwiperSlide key={product.id}>
                <SpecialCard product={product} />
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </>
  );
}

export default SpecialSlider;
