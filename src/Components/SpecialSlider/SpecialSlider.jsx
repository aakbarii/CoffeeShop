import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SpecialCard from "../SpecialCard/SpecialCard";
import "swiper/css";
import "swiper/css/autoplay";
import Axios from "axios";
import PlantHeder from "../Module/PlantHeder";

function SpecialSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("/product")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("خطا در دریافت داده‌ها: ", error);
      });
  }, []);

  return (
    <>
      <div className=" md:mb-0 mb-10">
        {/* عنوان */}
        <div className="flex justify-center items-center mt-16 md:mt-24 Rokh">
          <div className="flex items-center content-center text-center text-2xl md:text-5xl">
            <PlantHeder size="text-3xl md:text-5xl" text="فروش ویژه" />
          </div>
        </div>

        {/* اسلایدر */}
        <Swiper
          spaceBetween={10} // فاصله بین اسلایدها برای موبایل
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            1200: {
              slidesPerView: 4, // تعداد کارت‌ها برای صفحه‌نمایش‌های بزرگ
              spaceBetween: 20, // فاصله بین اسلایدها
            },
            992: {
              slidesPerView: 3, // تعداد کارت‌ها برای تبلت‌ها
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2, // تعداد کارت‌ها برای موبایل‌های بزرگ
              spaceBetween: 10,
            },
            0: {
              slidesPerView: 1, // تعداد کارت‌ها برای موبایل‌های کوچک
              spaceBetween: 10,
            },
          }}
        >
          {Array.isArray(products) && products.map((product) =>
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
